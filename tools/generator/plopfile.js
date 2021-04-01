const path = require("path");
const jsonc = require("jsonc-parser");
const packageNameRegex = require("package-name-regex");

const { promisify } = require("util");
const { readFile, writeFile } = require("fs");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("project-template", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "what's the name of your awesome new project",
        validate: (name) => {
          return name.length && packageNameRegex.test(name);
        }
      },
      {
        type: "list",
        name: "area",
        message: "where should I put this awesome new project",
        choices: ["apps", "libraries", "tests", "tools"]
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "../../{{area}}/{{name}}",
        base: "templates",
        templateFiles: "templates/**/*.hbs"
      },
      async (answers) => {
        try {
          const rushFilePath = path.resolve(__dirname, "../../rush.json");
          const data = await readFileAsync(rushFilePath, { encoding: "utf-8" });

          const modifyOptions = {
            isArrayInsertion: true,
            formattingOptions: {
              tabSize: 2,
              insertSpaces: true,
              insertFinalNewline: true
            }
          };

          const edits = jsonc.modify(
            data,
            ["projects", 0],
            {
              packageName: `@strmbrkr/${answers.name}`,
              projectFolder: `${answers.area}/${answers.name}`
            },
            modifyOptions
          );

          // write project changes
          await writeFileAsync(rushFilePath, jsonc.applyEdits(data, edits));
        } catch (err) {
          console.error(err);
        }
      }
    ]
  });
};

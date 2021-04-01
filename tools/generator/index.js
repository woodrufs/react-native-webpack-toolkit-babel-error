const path = require("path");
const nodePlop = require("node-plop");

const plop = nodePlop(path.resolve(__dirname, "./plopfile.js"));

// get a generator by name
const basicAdd = plop.getGenerator("project-template");
basicAdd.runPrompts()
  .then((args) => basicAdd.runActions(args))
  .then(() => console.log("done"));

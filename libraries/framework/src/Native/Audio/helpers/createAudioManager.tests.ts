jest.mock("../AudioPlayer");
import { AudioPlayer } from "../AudioPlayer";
import { createAudioManager } from "./createAudioManager";

beforeEach(() => {
  // reset data before each test
});

describe("createAudioManager", () => {
  test("The Audio Manager is returned successfully", async () => {
    const audioManager = await createAudioManager({
      audioCatalog: { error: "error.wav", success: "success.wav", warning: "warning.wav" }
    });
    expect(AudioPlayer).toHaveBeenCalledTimes(3);
  });
});

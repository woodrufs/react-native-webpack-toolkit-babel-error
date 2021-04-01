import { Player } from "@react-native-community/audio-toolkit";

/**
 * This wrapper class for Player is in case we need access to the filename the player is for.
 */
export class AudioPlayer {
  filename: string;
  player: Player;

  constructor(filename: string) {
    this.filename = filename;
    this.player = new Player(filename, {
      autoDestroy: false,
      continuesToPlayInBackground: false,
      mixWithOthers: true
    });
  }

  /**
   * Prepares the audio player ahead of time for playback by loading the source file.
   * Once the promise is resolved, the audio is ready to be played.
   */
  preparePlayer() {
    const promise = new Promise<void>((resolve, reject) => {
      try {
        this.player.prepare((err) => {
          if (err) {
            throw err;
          }
          console.log(`successfully prepped audio player for ${this.filename}`);
          resolve();
        });
      } catch (error) {
        console.error(`error prepping audio player for ${this.filename}`);
        console.error(error);
        reject(error);
      }
    });
    return promise;
  }

  /**
   * Plays the audio file.
   * @callback onPlayStarted - callback executed when the audio file has begun playing.
   */
  play(onPlayStarted?: () => void) {
    this.player.play(onPlayStarted);
  }
}

import { AudioPlayer } from "./AudioPlayer";

/**
 * The audio manager is used when a sound is needed to be played on the device.
 */
export class AudioManager {
  readonly errorPlayer: AudioPlayer;
  readonly successPlayer: AudioPlayer;
  readonly warningPlayer: AudioPlayer;

  constructor(errorPlayer: AudioPlayer, successPlayer: AudioPlayer, warningPlayer: AudioPlayer) {
    this.errorPlayer = errorPlayer;
    this.successPlayer = successPlayer;
    this.warningPlayer = warningPlayer;
  }

  /**
   * Plays the error sound.
   * @callback onPlayStarted - callback executed when the error sound begins to play.
   */
  playErrorSound(onPlayStarted?: () => void) {
    this.errorPlayer.player.play(onPlayStarted);
  }

  /**
   * Plays the success sound.
   * @callback onPlayStarted - callback executed when the success sound begins to play.
   */
  playSuccessSound(onPlayStarted?: () => void) {
    this.successPlayer.player.play(onPlayStarted);
  }

  /**
   * Plays the warning sound.
   * @callback onPlayStarted - callback executed when the warning sound begins to play.
   */
  playWarningSound(onPlayStarted?: () => void) {
    this.warningPlayer.player.play(onPlayStarted);
  }
}

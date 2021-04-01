import { IAudioManagerConfig } from "../audio-types";
import { AudioManager } from "../AudioManager";
import { AudioPlayer } from "../AudioPlayer";

/**
 * Creates the Audio Manager class.
 * @param config The config object for the AudioManager.
 */
export async function createAudioManager(config: IAudioManagerConfig): Promise<AudioManager> {
  const { audioCatalog } = config;
  const errorPlayer = new AudioPlayer(audioCatalog.error);
  const successPlayer = new AudioPlayer(audioCatalog.success);
  const warningPlayer = new AudioPlayer(audioCatalog.warning);

  const promises = [errorPlayer.preparePlayer(), successPlayer.preparePlayer(), warningPlayer.preparePlayer()];

  try {
    await Promise.all(promises);
  } catch (error) {}

  return new AudioManager(errorPlayer, successPlayer, warningPlayer);
}

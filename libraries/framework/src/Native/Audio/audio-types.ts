/**
 * Contains the list of filenames to be used for each audio player.
 */
export interface IAudioCatalog {
  error: string;
  success: string;
  warning: string;
}

/**
 * The config object for the AudioManager.
 */
export interface IAudioManagerConfig {
  audioCatalog: IAudioCatalog;
}

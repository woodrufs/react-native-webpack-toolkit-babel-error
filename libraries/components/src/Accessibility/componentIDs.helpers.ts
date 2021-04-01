/**
 * This is a function to be used for component Id generation
 * it should return string
 * Example of usage:
 * const iconId: string = generateComponentId(icon, pinIcon, color, backgroundColor);
 * @param componentIDs - array of string from which component Id
 * should be generated
 * @returns {string} - generated component Id
 */
export default function generateComponentId(...componentIDs: Array<string | null | undefined>): string {
  const separator = "|";
  return componentIDs.filter(Boolean).join(separator);
}

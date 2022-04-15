/**
 * Formatting a name in HEX to a shorter one, if the name is not in HEX, returns the original name.
 * @example
 * // returns '0x3b ... f8b4'
 * changeTokensLongName('0x3bf013054d1ce9a1f20d86207d2f2e37e9a3f8b4');
 * @example
 * // returns 'Mia Ayana'
 * changeTokensLongName('Mia Ayana');
 * @param  {string} name 
 */

export const changeTokensLongName = name => {
  if (!name.startsWith('0x')) return name;
  return `${name.slice(0, 4)} ... ${name.slice(-4)}`;
}

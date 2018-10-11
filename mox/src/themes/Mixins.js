/**
 * Convert from px to rem
 * @param {int} x
 */
export const px2Rem = (x) => {

  // Defaults to 16px (also the browser default).
  return x/16 + 'rem'
}

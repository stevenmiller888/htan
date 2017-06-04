
/**
 * Hyperbolic tangent function.
 *
 * - Useful for inputs between -1 and 1
 */

module.exports = Math.tanh || function tanh (x) {
  if (x === Infinity) {
    return 1
  }

  if (x === -Infinity) {
    return -1
  }

  var y = Math.exp(x * 2)
  return (y - 1) / (y + 1)
}

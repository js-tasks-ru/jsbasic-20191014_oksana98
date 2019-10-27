/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let i = 0;
  let p = m;
  while (i < n - 1) {
    p *= m;
    i = i + 1;
  }
  return p;
}


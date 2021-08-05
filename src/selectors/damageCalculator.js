/**
 * Calculate the remaining HP of the target after taking damage. !Version Beta!
 * @param {Number} moveDamage - The current move damage stat.
 * @param {Number} HP - The current HP stat of the attacked pokemon
 * @return {Number} - The remaining HP stat of the attacked pokemon.
*/

const damageCalculator = (moveDamage, HP) => {
  let leftHP;
  leftHP = HP - moveDamage;
  if (leftHP < 0) {
    leftHP = 0;
  }
  return leftHP;
};

export default damageCalculator;

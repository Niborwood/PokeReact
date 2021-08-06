// const TYPES =
// ['normal', 'fire', 'water', 'electric', 'grass',
// 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
// 'rock', 'ghost', 'dragon', 'dark', 'steel'];
// const TYPE_ORDER = {
//   normal: 0,
//   fire: 1,
//   water: 2,
//   electric: 3,
//   grass: 4,
//   ice: 5,
//   fighting: 6,
//   poison: 7,
//   ground: 8,
//   flying: 9,
//   psychic: 10,
//   bug: 11,
//   rock: 12,
//   ghost: 13,
//   dragon: 14,
//   dark: 15,
//   steel: 16,
// };
// const TYPE_CHART = {
//   normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5],
//   fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2],
//   water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
//   electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1],
//   grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5],
//   ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5],
//   fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2],
//   poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0],
//   ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2],
//   flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5],
//   psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5],
//   bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5],
//   rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5],
//   ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
//   dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5],
//   dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 0.5],
//   steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5],
// };

// const stabCalculator = (moveType, pokemonType) => {
//   let stab = 1;
//   if (pokemonType === moveType) {
//     stab = 1.5;
//   }
//   return stab;
// };

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

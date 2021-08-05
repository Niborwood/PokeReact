// Create a reducer
import {
  CHANGE_MENUCONTENT,
  SELECT_MENUBASE_ITEM,
  BATTLE_START,
  BATTLE_ANIMATION_START,
  BATTLE_ANIMATION_END,
  BATTLE_END,
} from '../actions';
import pokemons from '../data/pokemons';
import moves from '../data/moves';

// Initial State
const initialState = {
  // --- UI
  menuContent: 0, // 0:MENU, 1:FIGHT, 2:ITEMS, 3:PKMN, 4:RUN
  selectedMenuBaseItem: 1, // 1:FIGHT, 2:PKMN, 3:ITEM, 4:RUN
  // --- BATTLE
  isBattling: false,
  battleAnimation: false,
  // --- DATA
  pokemons,
  moves,
  // --- PKMNS
  opponentPkmn: {
    id: 28,
    name: 'Sablaireau',
    maxHP: 220,
    currentHP: 220,
    level: 50,
    stats: {
      atk: 120,
      def: 120,
      spd: 120,
      spe: 120,
    },
    moves: [1, 2, 3, 4],
    currentPPs: [],
    status: null,
    effect: null,
  },
  playerPkmn: {
    id: 6,
    name: 'Dracaufeu',
    maxHP: 221,
    currentHP: 134,
    level: 50,
    stats: {
      atk: 90,
      def: 90,
      spd: 90,
      spe: 90,
    },
    moves: [5, 2, 3, 4],
    currentPPs: [],
    status: null,
    effect: null,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_MENUCONTENT:
      return {
        ...state,
        menuContent: payload.menuContent,
        selectedMenuBaseItem: 1,
      };

    case SELECT_MENUBASE_ITEM:
      return {
        ...state,
        selectedMenuBaseItem: payload,
      };

    case BATTLE_START:
      return {
        ...state,
        isBattling: true,
      };

    case BATTLE_ANIMATION_START:
      return {
        ...state,
        battleAnimation: true,
        opponentPkmn: {
          ...state.opponentPkmn,
          currentHP: payload,
        },
      };

    case BATTLE_ANIMATION_END:
      return {
        ...state,
        battleAnimation: false,
      };

    case BATTLE_END:
      return {
        ...state,
        isBattling: false,
      };

    default:
      return state;
  }
};

export default reducer;

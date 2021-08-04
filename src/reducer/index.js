// Create a reducer
import { CHANGE_MENUCONTENT, SELECT_MENUBASE_ITEM } from '../actions';

// Initial State
const initialState = {
  menuContent: 0, // 0:MENU, 1:FIGHT, 2:ITEMS, 3:PKMN, 4:RUN
  selectedMenuBaseItem: 1, // 1:FIGHT, 2:PKMN, 3:ITEM, 4:RUN
  opponentPkmn: {
    id: 28,
    name: 'Sablaireau',
    maxHP: 220,
    currentHP: 22,
    level: 50,
    stats: {
      atk: 120,
      def: 120,
      spd: 120,
      spe: 120,
    },
    moves: [1, 2, 3, 4],
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
    moves: [1, 2, 3, 4],
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_MENUBASE_ITEM:
      return {
        ...state,
        selectedMenuBaseItem: payload,
      };

    case CHANGE_MENUCONTENT:
      return {
        ...state,
        menuContent: payload.menuContent,
        selectedMenuBaseItem: 1,
      };

    default:
      return state;
  }
};

export default reducer;

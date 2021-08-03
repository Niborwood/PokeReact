// Create a reducer
import { CHANGE_MENUBASE, SELECT_MENUBASE_ITEM, EXIT_TO_MENUBASE } from '../actions';

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
    moves: ['REPOS', 'PLAQUAGE', 'BLABLA DODO', 'TONNERRE'],
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
    moves: ['LANCE-FLAMME', 'VOL', 'DANSE_FLAMME', 'TRANCHE'],
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EXIT_TO_MENUBASE:
      return {
        ...state,
        menuContent: 0,
      };

    case SELECT_MENUBASE_ITEM:
      return {
        ...state,
        selectedMenuBaseItem: payload,
      };

    case CHANGE_MENUBASE:
      return {
        ...state,
        menuContent: payload,
      };

    default:
      return state;
  }
};

export default reducer;

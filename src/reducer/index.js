// Create a reducer
import {
  CHANGE_MENUCONTENT,
  SELECT_MENUBASE_ITEM,
  BATTLE_START,
  BATTLE_ANIMATION_START,
  BATTLE_ANIMATION_END,
  BATTLE_END,
  BATTLE_MOVE,
} from '../actions';
import pokemons from '../data/pokemons';
import moves from '../data/moves';

// Initial State
const initialState = {
  // --- UI
  menuContent: 0, // 0:MENU, 1:FIGHT, 2:ITEMS, 3:PKMN, 4:RUN
  selectedMenuItem: 1, // 1:FIGHT, 2:PKMN, 3:ITEM, 4:RUN
  // --- BATTLE
  isBattling: false,
  battleAnimation: false,
  currentMove: {},
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
        selectedMenuItem: 1,
      };

    case SELECT_MENUBASE_ITEM:
      return {
        ...state,
        selectedMenuItem: payload,
      };

    case BATTLE_MOVE:
      return {
        ...state,
        currentMove: payload.currentMove,
      };

    // Launching battle mode
    // (triggering text info and shake/flicker animation)
    case BATTLE_START:
      return {
        ...state,
        isBattling: true,
      };

    // Store remaining opponent HP, and by effect,
    // starting the battle animation
    case BATTLE_ANIMATION_START:
      return {
        ...state,
        battleAnimation: true,
        opponentPkmn: {
          ...state.opponentPkmn,
          currentHP: payload,
        },
      };

    // All animations stop (flicker/shake + lifebar drain)
    case BATTLE_ANIMATION_END:
      return {
        ...state,
        battleAnimation: false,
      };

      // One turn of battle has ended (return to attack menu)
      // currentMove state is reset
    case BATTLE_END:
      return {
        ...state,
        isBattling: false,
        currentMove: {},
      };

    default:
      return state;
  }
};

export default reducer;

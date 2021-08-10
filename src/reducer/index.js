// Create a reducer
import {
  CHANGE_MENUCONTENT,
  SELECT_MENUBASE_ITEM,
  BATTLE_INIT,
  PLAYER_MOVE,
  OPPONENT_MOVE,
  BATTLE_START,
  PLAYER_DAMAGE_START,
  OPPONENT_DAMAGE_START,
  OPPONENT_DAMAGE_END,
  PLAYER_DAMAGE_END,
  PLAYER_MOVE_END,
  OPPONENT_MOVE_END,
  LAST_TURN_END,
  BATTLE_END,
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
  playerTurn: false,
  opponentTurn: false,
  lastTurn: false,
  currentPlayerMove: {},
  currentOpponentMove: {},
  // --- DATA
  pokemons,
  moves,
  // --- PKMNS
  opponentPkmn: {
    id: 28,
    name: 'Sablaireau',
    maxHP: 150,
    currentHP: 150,
    prevHP: 150,
    level: 50,
    stats: {
      atk: 120,
      def: 120,
      spd: 135,
      spe: 120,
    },
    moves: [1, 2, 5, 4],
    currentPPs: [],
    status: null,
    effect: null,
  },
  playerPkmn: {
    id: 6,
    name: 'Dracaufeu',
    maxHP: 221,
    currentHP: 221,
    prevHP: 221,
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
    // ---- UI MENU ----
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

    // ---- BATTLE ----
    case BATTLE_START:
      return {
        ...state,
        currentPlayerMove: payload.currentPlayerMove,
        currentOpponentMove: payload.currentOpponentMove,
      };

    // Launching battle mode
    // (triggering text info and shake/flicker animation)
    case BATTLE_INIT:
      return {
        ...state,
        isBattling: true,
      };

    case PLAYER_MOVE:
      return {
        ...state,
        playerTurn: true,
        opponentTurn: false,
        lastTurn: payload,
      };
    case OPPONENT_MOVE:
      return {
        ...state,
        opponentTurn: true,
        playerTurn: false,
        lastTurn: payload,
      };

    // Store remaining opponent HP, and by effect,
    // starting the battle animation
    case PLAYER_DAMAGE_START:
      return {
        ...state,
        battleAnimation: true,
        opponentPkmn: {
          ...state.opponentPkmn,
          prevHP: state.opponentPkmn.currentHP,
          currentHP: payload,
        },
      };

    case OPPONENT_DAMAGE_START:
      return {
        ...state,
        playerPkmn: {
          ...state.playerPkmn,
          prevHP: state.playerPkmn.currentHP,
          currentHP: payload,
        },
      };

    // All animations stop (flicker/shake + lifebar drain) +
    // signal to launch BattleEnd the whole battle
    case PLAYER_DAMAGE_END:
      return {
        ...state,
        battleAnimation: false,
        // lastTurn: true,
        // playerTurn: !state.lastTurn,
      };

    case OPPONENT_DAMAGE_END:
      return {
        ...state,
        battleAnimation: false,
      };

    // End turn if it's the first turn of battle
    case PLAYER_MOVE_END:
      return {
        ...state,
      };
    case OPPONENT_MOVE_END:
      return {
        ...state,
      };

      // One turn of battle has ended (return to attack menu)
      // currentPlayerMove state is reset
    case LAST_TURN_END:
      return {
        ...state,
        lastTurn: false,
      };

    case BATTLE_END:
      return {
        ...state,
        isBattling: false,
        currentPlayerMove: {},
        currentOpponentMove: {},
        lastTurn: false,
        playerTurn: false,
      };

    default:
      return state;
  }
};

export default reducer;

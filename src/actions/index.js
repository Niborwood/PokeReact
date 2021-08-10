export const SELECT_MENUBASE_ITEM = 'SELECT_MENUBASE_ITEM';
export const CHANGE_MENUCONTENT = 'CHANGE_MENUCONTENT';

export const BATTLE_INIT = 'BATTLE_INIT';
export const PLAYER_MOVE = 'PLAYER_MOVE';
export const OPPONENT_MOVE = 'OPPONENT_MOVE';

export const BATTLE_START = 'BATTLE_START';
export const PLAYER_DAMAGE_START = 'PLAYER_DAMAGE_START';
export const PLAYER_DAMAGE_END = 'PLAYER_DAMAGE_END';
export const PLAYER_MOVE_END = 'PLAYER_MOVE_END';

export const OPPONENT_START = 'OPPONENT_START';
export const OPPONENT_DAMAGE_START = 'OPPONENT_DAMAGE_START';
export const OPPONENT_DAMAGE_END = 'OPPONENT_DAMAGE_END';
export const OPPONENT_MOVE_END = 'OPPONENT_MOVE_END';

export const LAST_TURN_END = 'LAST_TURN_END';
export const BATTLE_END = 'BATTLE_END';

// ---- UI MENU ----

// Select (with keyboard actions) an item
// and displays it in the UI
export const selectMenuBaseItem = (menuItem) => ({
  type: SELECT_MENUBASE_ITEM,
  payload: menuItem,
});

// Change the current menuContent (displayer of menu content)
// in the state on Confirm or Cancel Input
export const changeMenuBase = (menuContent) => ({
  type: CHANGE_MENUCONTENT,
  payload: menuContent,
});

// ---- BATTLE ----

// LAUNCH THE MIDDLEWARE CASE TO INITIALIZE THE BATTLE (mesuring speed, order the battle)
export const battleInit = () => ({
  type: BATTLE_INIT,
});

// LAUNCH THE MIDDLEWARE CASE TO HANDLE MULTIPLE ACTIONS FOR THE PLAYER MOVE
export const playerMove = (isLastTurn) => ({
  type: PLAYER_MOVE,
  payload: isLastTurn,
});

// LAUNCH THE MIDDLEWARE CASE TO HANDLE MULTIPLE ACTIONS FOR THE OPPONENT MOVE
export const opponentMove = (isLastTurn) => ({
  type: OPPONENT_MOVE,
  payload: isLastTurn,
});

// Specific player move actions (start, animation/damage start, end) against opponent pokemon
export const battleStart = (currentPlayerMove) => ({
  type: BATTLE_START,
  payload: currentPlayerMove,
});
export const playerDamageStart = (opponentHP) => ({
  type: PLAYER_DAMAGE_START,
  payload: opponentHP,
});
export const playerDamageEnd = () => ({
  type: PLAYER_DAMAGE_END,
});
export const playerMoveEnd = () => ({
  type: PLAYER_MOVE_END,
});

// Specific opponent move actions (start, animation/damage start, end) against player pokemon
export const OpponentStart = (currentOpponentMove) => ({
  type: OPPONENT_START,
  payload: currentOpponentMove,
});
export const opponentDamageStart = (playerHP) => ({
  type: OPPONENT_DAMAGE_START,
  payload: playerHP,
});
export const opponentDamageEnd = () => ({
  type: OPPONENT_DAMAGE_END,
});
export const opponentMoveEnd = () => ({
  type: OPPONENT_MOVE_END,
});

// Common move actions (last turn end, battle end)
export const lastTurnEnd = () => ({
  type: LAST_TURN_END,
});

export const battleEnd = () => ({
  type: BATTLE_END,
});

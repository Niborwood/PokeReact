// --- UI ACTIONS ---
export const SELECT_MENUBASE_ITEM = 'SELECT_MENUBASE_ITEM';
export const CHANGE_MENUCONTENT = 'CHANGE_MENUCONTENT';

// --- BATTLE ACTIONS ---
// Middlewares
export const BATTLE_START = 'BATTLE_START';
export const BATTLE_MOVE = 'BATTLE_MOVE';

// Common
export const BATTLE_INIT = 'BATTLE_INIT';
export const DAMAGE_START = 'DAMAGE_START';
export const DAMAGE_END = 'DAMAGE_END';
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

// Move middlewares
export const battleMove = (battleData) => ({
  type: BATTLE_MOVE,
  payload: battleData,
});

export const battleStart = (currentPlayerMove) => ({
  type: BATTLE_START,
  payload: currentPlayerMove,
});

export const damageStart = (damageData) => ({
  type: DAMAGE_START,
  payload: damageData,
});
export const damageEnd = () => ({
  type: DAMAGE_END,
});

export const battleEnd = () => ({
  type: BATTLE_END,
});

export const SELECT_MENUBASE_ITEM = 'SELECT_MENUBASE_ITEM';
export const CHANGE_MENUCONTENT = 'CHANGE_MENUCONTENT';
export const BATTLE_MOVE = 'BATTLE_MOVE';
export const BATTLE_START = 'BATTLE_START';
export const BATTLE_ANIMATION_START = 'BATTLE_ANIMATION_START';
export const BATTLE_ANIMATION_END = 'BATTLE_ANIMATION_END';
export const BATTLE_END = 'BATTLE_END';

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

export const battleMove = (currentMove) => ({
  type: BATTLE_MOVE,
  payload: currentMove,
});

export const battleStart = () => ({
  type: BATTLE_START,
});

export const battleAnimationStart = (opponentHP) => ({
  type: BATTLE_ANIMATION_START,
  payload: opponentHP,
});

export const battleAnimationEnd = () => ({
  type: BATTLE_ANIMATION_END,
});

export const battleEnd = () => ({
  type: BATTLE_END,
});

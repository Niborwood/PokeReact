export const SELECT_MENUBASE_ITEM = 'SELECT_MENUBASE_ITEM';
export const CHANGE_MENUBASE = 'CHANGE_MENUBASE';
export const EXIT_TO_MENUBASE = 'EXIT_TO_MENUBASE';

export const exitToMenuBase = () => ({
  type: EXIT_TO_MENUBASE,
});

export const selectMenuBaseItem = (menuItem) => ({
  type: SELECT_MENUBASE_ITEM,
  payload: menuItem,
});

export const changeMenuBase = (menuItem) => ({
  type: CHANGE_MENUBASE,
  payload: menuItem,
});

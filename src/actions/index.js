export const SELECT_MENUBASE_ITEM = 'SELECT_MENUBASE_ITEM';
export const CHANGE_MENUCONTENT = 'CHANGE_MENUCONTENT';

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

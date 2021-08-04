/* eslint-disable max-len */

/**
 * Confirm, cancel or both any user input in order to navigate the UI.
 * @param {String} action - The action to be performed. Can be 'confirm', 'cancel' or 'any'.
 * @param {String} key - The event.key typed by the user.
 * @param {Function} dispatch - The Redux dispatch action.
 * @param {Function} callback - The callback to be called after the action is performed, which will update the state.
 * @param {Object} params - Any parameters to be passed to the callback towards the reducer payload. Name them as propToUpdateInState: value.
*/
const actionHandler = (action, key, dispatch, callback, params) => {
  switch (action) {
    // CONFIRM ACTION
    case 'confirm':
      if (key === 'Enter' || key === 'x' || key === 'l') {
        dispatch(callback({ ...params }));
      }
      break;

    // CANCEL ACTION
    case 'cancel':
      if (key === 'Escape' || key === 'c' || key === 'm') {
        dispatch(callback({ ...params }));
      }
      break;

    // DEFAULT ACTION (CONFIRM OR CANCEL -> DISPATCH THE ACTION)
    case 'any':
      if (key === 'Escape' || key === 'c' || key === 'm' || key === 'Enter' || key === 'x' || key === 'l') {
        dispatch(callback({ ...params }));
      }
      break;

    default:
      break;
  }
};

export default actionHandler;

const confirmHandler = (key, dispatch, callback, param) => {
  if (key === 'Enter' || key === 'x' || key === 'l') {
    dispatch(callback(param));
  }
};

export default confirmHandler;

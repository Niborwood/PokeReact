const confirmHandler = (key, dispatch, callback) => {
  if (key === 'Enter' || key === 'x' || key === 'l') {
    dispatch(callback());
  }
};

export default confirmHandler;

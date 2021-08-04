// handle up and down arrow keys on any number of menu items

const verticalMenuKeyhandler = (key, item, nbItems) => {
  if (key === 'ArrowUp' || key === 'z') {
    if (item > 1) {
      return item - 1;
    }
    return nbItems;
  } if (key === 'ArrowDown' || key === 's') {
    if (item < nbItems) {
      return item + 1;
    }
    return 1;
  }
  return item;
};

export default verticalMenuKeyhandler;

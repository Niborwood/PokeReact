// handle arrow keys events in a 4 by 4 grid

// KEYS : 'ArrowUp' = up, 'ArrowDown' = down, 'ArrowLeft' = left, 'ArrowRight' = right
// KEYS : 'z' = z, 's' = s, 'q' = q, 'd' = d

const fourMenuKeyHandler = (key, item) => {
  // GO TO 1
  if (
    // UP & 3
    ((key === 'ArrowUp' || key === 'z') && item === 3)
    // DOWN & 3
    || ((key === 'ArrowDown' || key === 's') && item === 3)
    // LEFT & 2
    || ((key === 'ArrowLeft' || key === 'q') && item === 2)
    // RIGHT & 2
    || ((key === 'ArrowRight' || key === 'd') && item === 2)
  ) {
    return 1;
  }

  // GO TO 2
  if (
    // UP & 4
    ((key === 'ArrowUp' || key === 'z') && item === 4)
    // DOWN & 4
    || ((key === 'ArrowDown' || key === 's') && item === 4)
    // LEFT & 1
    || ((key === 'ArrowLeft' || key === 'q') && item === 1)
    // RIGHT & 1
    || ((key === 'ArrowRight' || key === 'd') && item === 1)
  ) {
    return 2;
  }

  // GO TO 3
  if (
    // DOWN & 1
    ((key === 'ArrowDown' || key === 's') && item === 1)
    // UP & 1
    || ((key === 'ArrowUp' || key === 'z') && item === 1)
    // RIGHT & 4
    || ((key === 'ArrowRight' || key === 'd') && item === 4)
    // LEFT & 4
    || ((key === 'ArrowLeft' || key === 'q') && item === 4)
  ) {
    return 3;
  }

  // GO TO 4
  if (
    // UP & 2
    ((key === 'ArrowUp' || key === 'z') && item === 2)
    // DOWN & 2
    || ((key === 'ArrowDown' || key === 's') && item === 2)
    // LEFT & 3
    || ((key === 'ArrowLeft' || key === 'q') && item === 3)
    // RIGHT & 3
    || ((key === 'ArrowRight' || key === 'd') && item === 3)
  ) {
    return 4;
  }

  console.log(item);
  return item;
};

export default fourMenuKeyHandler;

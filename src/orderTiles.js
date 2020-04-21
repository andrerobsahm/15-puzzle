function shuffle(array) {
  const _array = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
}

export default function initTileOrder() {
  const SET_INITIAL_BOARD = 4 * 4;
  const EMPTY_INDEX = SET_INITIAL_BOARD - 1;

  var SUM = [...Array(SET_INITIAL_BOARD).keys()];

  let id = 0;
  const tiles = SUM.reduce((acc) => {
    acc.push({
      id: id++,
      empty: EMPTY_INDEX,
    });
    return acc;
  }, []);

  return shuffle(tiles);
  // return tiles;
}

const INITIAL_STATE = { value: 1 };

function stateContainer(initialState) {
  let state = initialState;
  let history = [];

  function setState(newState) {
    history.push(state);
    console.log(`NEW STATE => ${JSON.stringify(newState)}`);
    state = newState;
  }

  function getHistory(index) {
    return console.log(index ? history[index] : history);
  }

  return {
    setState,
    getHistory,
  };
}

const { setState, getHistory } = stateContainer(INITIAL_STATE);

setState({ value: 3 });
setState({ value: 22 });
setState({ value: 40 });
console.log('GET ALL HISTORY');
getHistory();
console.log('GET ONE HISTORY ITEM');
getHistory(1);

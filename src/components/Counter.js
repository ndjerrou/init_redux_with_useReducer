import { useState, useReducer, useRef } from 'react';

function Counter() {
  const refInput = useRef(null);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT_BY_ONE': {
        return {
          counter: state.counter + 1,
        };
      }
      case 'DECREMENT_BY_ONE': {
        return {
          counter: state.counter - 1,
        };
      }
      case 'INCREMENT_A_LOT': {
        return {
          counter: state.counter + +action.payload.add,
        };
      }
      case 'RESET': {
        return {
          counter: 0,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });

  const actionIncrement = {
    type: 'INCREMENT_BY_ONE',
  };

  const actionDecrement = {
    type: 'DECREMENT_BY_ONE',
  };

  const handleIncrement = () => {
    dispatch(actionIncrement);
  };

  const handleDecrement = () => {
    dispatch(actionDecrement);
  };

  const handleReset = () => {
    dispatch({
      type: 'RESET',
    });
  };

  const handleChange = () => {
    dispatch({
      type: 'INCREMENT_A_LOT',
      payload: {
        add: refInput.current.value,
      },
    });
  };

  //   console.log(state);

  return (
    <div>
      Counter
      <div>{state.counter}</div>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>reset</button>
      <div>
        Add by : <input ref={refInput} />
        <button onClick={handleChange}>Go ! </button>
      </div>
    </div>
  );
}

export default Counter;

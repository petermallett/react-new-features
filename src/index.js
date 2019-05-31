import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// // Bad example - this component does not work correctly.
// const App = (props) => {
//   // const [count, setCount] = useState(props.initCount);
//   // const [text, setText] = useState('');
//   const [state, setState] = useState({
//     count: props.initCount,
//     text: '',
//   });

//   return (
//     <div>
//       <p>The current {state.text || 'count'} is {state.count}</p>
//       <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
//       <button onClick={() => setState({ count: props.initCount })}>Reset</button>
//       <button onClick={() => setState({ count: state.count + 1 })}>+1</button>
//       <input value={state.text} onChange={(e) => setState({ text: e.target.value })} />
//     </div>
//   );
// };

const App = (props) => {
  const [count, setCount] = useState(props.initCount);
  const [text, setText] = useState('');

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.initCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  initCount: 0,
};

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

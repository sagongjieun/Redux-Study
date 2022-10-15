import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Counter number={0} />
      <br />
      <hr />
      <br />
      <Todos />
    </div>
  );
}

export default App;

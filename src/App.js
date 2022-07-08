import './App.css';
import Todo from './components/Todo';
import { GlobalState } from './contextapi/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="container">
        <div className='row mt-4'>
          <div className='col col-10 mx-auto col-md-8 col-sm-4 text-center'>
            <Todo />
          </div>
        </div>
      </div>
    </GlobalState>
  );
}

export default App;

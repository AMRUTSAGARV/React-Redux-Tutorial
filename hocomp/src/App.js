// import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
     <h2>
     Hof</h2>
     <div className='section'>
     
     <div><UserList />
       </div>  
     <div><TodoList />
       </div>  
     </div>

    </div>
  );
}

export default App;

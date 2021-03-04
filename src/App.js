import './App.css';
import NavBar from './Components/NavBar/NavBar';
import UsersList from './Components/UsersList/UsersList';
import "./App.css"

function App() {
  return (
    <div >
     <NavBar/>
     <div className="App">
     <UsersList/>
     </div>
    </div>
  );
}

export default App;

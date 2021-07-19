
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from './components/Sidebar'
import NavBar from './components/NavBar';
import Main from './components/Main';
// import Product from './components/Product';

function App() {
  return (
    <div className="App">  
      <NavBar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

import './App.css';
import SingUp from './components/SignUp';
import Login from './components/Login';
import { Route , Routes ,Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SingUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<SingUp />}/>
      </Routes>
    </div>
  );
}

export default App;

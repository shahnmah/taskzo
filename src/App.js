import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CalendarMain from './components/Calendar/CalendarMain';


function App() {
  return (
    <div style={{backgroundColor: '#EFFFFD', height: '100vh'}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/calendar' element={<CalendarMain/>}/>
      </Routes>
    </div>
  );
}

export default App;

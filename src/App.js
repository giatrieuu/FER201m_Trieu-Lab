
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Detail from "./components/Detail";
import Films from './components/Films';
import Footer from "./components/Footer";
import Navigation from './components/Navigation';



function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Films/>}> 
      </Route>
      <Route path="/detail/:id" element={<Detail />} /> {/* Đặt route cho Details */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

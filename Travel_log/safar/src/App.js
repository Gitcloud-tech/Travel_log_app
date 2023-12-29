import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import IntroPage from './Components/Intropage';
import MyBlogs from './Components/MyBlogs';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
      </Routes>
    </>
  );
}

export default App;

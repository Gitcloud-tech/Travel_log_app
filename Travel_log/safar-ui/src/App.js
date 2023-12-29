import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import AddBlog from './Components/AddBlog';
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
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/add-blog' element={<AddBlog/>}/>



        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;

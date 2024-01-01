import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import IntroPage from './Components/Intropage';
import Navbar from './Components/Navbar';
import MyBlogs from './Components/MyBlogs';
import Logs from './Components/Logs';
import AddBlog from './Components/AddBlog';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div  className="section-main">
      <Routes>
        <Route path='/' element={<IntroPage/>} />
        <Route path='/myblogs' element={<MyBlogs/>} />
        <Route path='/logs' element={<Logs/>} style={{backgroundImage :'url("Imgs/verticalLeaves1.jpg")' }}/>
        <Route path='/add-blog' element={<AddBlog/>}/>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;

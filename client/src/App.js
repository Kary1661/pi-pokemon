// import './App.css';
import Home from '../src/allViews/Home/Home';
import Landing from '../src/allViews/Landing/Landing';
import Form from '../src/allViews/CreateForm/Form';
import Detail from '../src/allViews/PokeDetail/Detail';
import NotFound from '../src/allViews/NotFound/NotFound';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/create' element={<Form/>} />
        <Route exact path='/pokemon/:id' element={<Detail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
import './App.css';
import Home from './allViews/Home/Home'
import Landing from './allViews/Landing/Landing'
import Form from './allViews/CreateForm/Form'
import Detail from './allViews/PokeDetail/Detail'
import NotFound from './allViews/NotFound/NotFound'
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/'><Landing/></Route>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/create'><Form/></Route>
        <Route exact path='/pokemon/:id'><Detail/></Route>
        <Route path='*'><NotFound/></Route>
      </Routes>
    </div>
  );
}

export default App;
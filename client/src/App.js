import './App.css';
import { Home, Landing, Form, Detail, NotFound } from "./allViews";
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
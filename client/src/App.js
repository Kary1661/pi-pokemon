import './App.css';
import { Home, Landing, Form, Detail, NotFound } from "./allViews";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
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
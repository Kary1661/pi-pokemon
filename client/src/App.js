import './App.css';
import {Home, Landing, CreateForm, NotFound, Detail} from './Pages'
import { Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Landing/></Route>
        <Route exact path='/home'><Home/></Route>
        <Route exact path='/create'><CreateForm/></Route>
        <Route exact path='/pokemon/:id'><Detail/></Route>
        <Route path='*'><NotFound/></Route>
      </Switch>
    </div>
  );
}

export default App;
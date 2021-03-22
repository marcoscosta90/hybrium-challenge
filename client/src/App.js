import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import EmployeeAdd from './components/EmployeeAdd';
import CreateUser from './components/CreateUser'
import UserDetails from './components/UserDetails';
import Create from './pages/Create'
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/employees" exact component={EmployeeAdd} />
        <Route path="/createuser" exact component={Create} />
        <Route path="/edit/:id" exact component={Create} />
        <Route path="/userdetails/:id" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

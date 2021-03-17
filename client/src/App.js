import './App.css';
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import EmployeeAdd from './components/EmployeeAdd';
import CreateUser from './components/CreateUser'
import UserDetails from './components/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/employees" exact component={EmployeeAdd} />
        <Route path="/createuser" exact component={CreateUser} />
        <Route path="/userdetails" exact component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

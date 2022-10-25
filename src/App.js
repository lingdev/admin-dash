import './App.css';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import Update from './components/Update';
import {Route} from 'react-router-dom'
import Login from './components/Login';
import UserDash from './components/UserDash';

function App() {
  return (
    <div className="title">
     
      <Route path="/" exact component={Create} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/update" exact component={Update} />
      <Route path="/login" exact component={Login} />
      <Route path="/userdash" exact component={UserDash} />



      

    </div>
  );
}

export default App;

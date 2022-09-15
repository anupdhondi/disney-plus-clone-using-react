import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import { useSelector } from 'react-redux';
import { selectUserName } from './features/user/userSlice';

function App() {
  const userName = useSelector(selectUserName);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {userName && (
            <>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/detail/:title">
                <Detail />
              </Route>
            </>
          )}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

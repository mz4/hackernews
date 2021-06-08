import { 
  HashRouter as Router,
  Route, 
  Switch,
  Redirect
} from 'react-router-dom'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import React from 'react';
import News from './components/news/News';
import Searchnews from './components/searchnews/Searchnews';
import './sass/App.scss';

function App() {
  return (
    <div className="container" data-testid="App">
      <Header />
      <div className="content">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/top" >
              <News type='top' />
            </Route>
            <Route path="/best" >
              <News type='best' />
            </Route>
            <Route path="/searchnews" >
              <Searchnews type='best' />
            </Route>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/top" /> 
                    )
                }}
              />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

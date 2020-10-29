import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'bootswatch/dist/superhero/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { IntlProvider } from 'react-intl';
import messagesFr from './translation/fr';
import messagesEn from './translation/en';

import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Project from './pages/Project';

import Navbar from './components/Navbar';

const messages = {
  fr: messagesFr,
  en: messagesEn
}; 

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');

  return (
    <Router>
      <IntlProvider locale={language} messages={messages[language]}>
        <Navbar
          setLanguage = { setLanguage }
          languages = { Object.keys(messages) }
        />

        <div className="container-fluid mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/work/:project" component={Project} />
          </Switch>
        </div>
      </IntlProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

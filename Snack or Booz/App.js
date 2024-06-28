import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Menu from './Menu';
import AddItemForm from './AddItemForm';
import NotFoundPage from './NotFoundPage';
import { MenuProvider } from './MenuContext';

const App = () => (
  <MenuProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/snacks" component={() => <Menu type="snacks" />} />
        <Route path="/drinks" component={() => <Menu type="drinks" />} />
        <Route path="/add-item" component={AddItemForm} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </MenuProvider>
);

export default App;

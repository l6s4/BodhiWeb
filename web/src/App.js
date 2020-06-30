import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import LogOut from './pages/LogOut';
import samplePage from './pages/samplePage';
import CreateUser from './pages/CreateUser';
import MainNavigation from './components/Navigation/MainNavigation';
import UserProfile from './pages/UserProfile';
import { connect } from 'react-redux';
import BookAppointment from './pages/BookAppointment';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loggedIn: `false`
    }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment />
        <MainNavigation />
        <main className="main-content">
          <Route path="/sample" component={samplePage} />
          <h1>{this.props.errorMsg}</h1>
          <Switch>
            <Redirect from="/" to="/login" exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/userProfile" component={UserProfile} />
            <Route path="/createUser" component={CreateUser} />
            <Route path="/logout" component={LogOut} />
            <Route path="/booking" component={BookAppointment} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    errorMsg: state.login.errorMsg
  };
}

const mapDispatcherToProps = {
}

export default connect(mapStateToProps, mapDispatcherToProps)(App);
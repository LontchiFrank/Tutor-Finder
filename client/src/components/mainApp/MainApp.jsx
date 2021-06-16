import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './mainApp.css';
import SideNav from './sideNav/SideNav';
import Chat from './chat/Chat';
import ClassRoomChat from '../mainApp/classroom/ClassRoom';
import Classroom from './classroom/MainClassEntry';

import Profile from './Profile/Profile';
import PrivateRoute from '../PrivateRouting/PrivateRoute';
import TutorIndProfile from '../ViewAllTutors/TutorProfile';
import ViewTutors from './ViewTutors/ViewTutors';

// import Chat from "./chat/Chat";
const Navbar = () => {
  return (
    <div className="main">
      <SideNav />

      <div className="mybody">
        <Switch>
          <PrivateRoute path="/home" exact component={ViewTutors} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/classroom" component={Classroom} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/tut/profile" component={TutorIndProfile} />
          <PrivateRoute exact path="/Classchat" component={ClassRoomChat} />
          <Redirect from="/mainApp" to="home" />
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;

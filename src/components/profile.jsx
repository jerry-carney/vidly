import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";

class Profile extends Component {
  render() {
    const user = auth.getCurrentUser();
    if (!user) return <Redirect to="/" />;

    return (
      <div>
        <h1>Profile</h1>
        <h4>
          <u>Name</u>: {user.name}
        </h4>
        <h4>
          <u>Email</u>: {user.email}
        </h4>
        {user.isAdmin && (
          <div>
            <i className="fa fa-user-plus fa-lg"> Administrator</i>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;

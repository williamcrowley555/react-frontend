import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserByUserId(this.state.userId).then((response) => {
      this.setState({ user: response.data });
    });
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">User Details</h3>
          <div className="card-body">
            <div className="row">
              <label className="fw-bold">User ID: </label>
              <div>{this.state.user.userId}</div>
            </div>
            <div className="row">
              <label className="fw-bold">First Name: </label>
              <div>{this.state.user.firstName}</div>
            </div>
            <div className="row">
              <label className="fw-bold">Last Name: </label>
              <div>{this.state.user.lastName}</div>
            </div>
            <div className="row">
              <label className="fw-bold">Email: </label>
              <div>{this.state.user.email}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewUser;

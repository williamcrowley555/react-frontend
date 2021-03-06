import React, { Component } from "react";
import UserService from "../services/UserService";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  componentDidMount() {
    if (this.state.userId === "_add") {
      return;
    } else {
      UserService.getUserByUserId(this.state.userId).then((response) => {
        let user = response.data;
        this.setState({ firstName: user.firstName, lastName: user.lastName });
      });
    }
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  changePasswordHandler(event) {
    this.setState({ password: event.target.value });
  }

  saveOrUpdateEmployee(event) {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("User => " + JSON.stringify(user));

    if (this.state.userId === "_add") {
      UserService.createUser(user).then((response) => {
        this.props.history.push("/users");
      });
    } else {
      UserService.updateUser(user, this.state.userId).then((response) => {
        this.props.history.push("/users");
      });
    }
  }

  cancel() {
    this.props.history.push("/users");
  }

  getTitle() {
    if (this.state.userId === "_add") {
      return <h3 className="text-center">Add User</h3>;
    } else {
      return <h3 className="text-center">Update User</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  {this.state.userId === "_add" && (
                    <div>
                      <div className="form-group">
                        <label> Email: </label>
                        <input
                          placeholder="Email Address"
                          name="email"
                          className="form-control"
                          value={this.state.email}
                          onChange={this.changeEmailHandler}
                        />
                      </div>
                      <div className="form-group">
                        <label> Password: </label>
                        <input
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="form-control"
                          value={this.state.password}
                          onChange={this.changePasswordHandler}
                        />
                      </div>
                    </div>
                  )}

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;

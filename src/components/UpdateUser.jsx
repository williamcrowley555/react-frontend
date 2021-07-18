import React, { Component } from "react";
import UserService from "../services/UserService";

class UpdateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.match.params.id,
      firstName: "",
      lastName: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  componentDidMount() {
    UserService.getUserByUserId(this.state.userId).then((response) => {
      let user = response.data;
      this.setState({ firstName: user.firstName, lastName: user.lastName });
    });
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  saveOrUpdateEmployee(event) {
    event.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    console.log("User => " + JSON.stringify(user));

    UserService.updateUser(user, this.state.userId).then((response) => {
      this.props.history.push("/users");
    });
  }

  cancel() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Update User</h3>
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

export default UpdateUser;

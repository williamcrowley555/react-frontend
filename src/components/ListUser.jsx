import React, { Component } from "react";
import UserService from "../services/UserService";

class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }

  editUser(userId) {
    this.props.history.push(`/add-user/${userId}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <div className="px-0 my-3">
            <button className="btn btn-primary" onClick={this.addUser}>
              Add User
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.userId)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUser;

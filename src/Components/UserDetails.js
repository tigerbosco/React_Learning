import React from "react";
import { connect } from "react-redux";
class UserDetails extends React.Component {
  componentDidMount() {
    let url =
      "https://api.github.com/users/" + this.props.match.params.name + "/repos";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(this.props);
      });
  }
  render() {
    return <h1>Hi User {this.props.match.params.name}</h1>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    userName: state.userName
  };
}
export default connect(mapStateToProps)(UserDetails);

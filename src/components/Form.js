import React from "react";
export default class props extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: {
        value: "",
        error: false
      }
    };
  }
  handelField = e => {
    this.setState({
      searchStr: {
        ...this.state.searchStr,
        value: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchStr.value === "") {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: true
        }
      });
    } else {
      this.setState({
        searchStr: {
          ...this.state.searchStr,
          error: false
        }
      });
      this.props.getGifs(this.state.searchStr.value);
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={this.state.searchStr.error ? "error" : ""}
          value={this.state.searchStr.value}
          onChange={this.handelField}
          placeholder="Search your GIF..."
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}

import React, { Component } from "react";

export class FormApdute extends Component {
  render() {
    return (
      <form onSubmit={this.props.updateUrl}>
        <input
          type="text"
          value={this.props.idDrink}
          onChange={this.props.updateidDrink}
        />
        <input
          type="text"
          value={this.props.strDrink}
          onChange={this.props.updatestrDrink}
        />
        <input type="submit" value="update data" />
      </form>
    );
  }
}

export default FormApdute;

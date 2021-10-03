import axios from "axios";
import React, { Component } from "react";
import CradFav from "./CradFav";
import FormApdute from "./FormApdute";
const URL = process.env.REACT_APP_URL;

export class Favarouite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favDrink: [],
      showFavDrink: false,
      strDrink: "",
      idDrink: "",
      slug: "",
      showUpdateform: false,
    };
  }
  componentDidMount = async () => {
    const getFromPost = await axios.get(`${URL}/getpost`);
    this.setState({
      favDrink: getFromPost.data,
      showFavDrink: true,
    });
    console.log(this.state.favDrink);
  };

  deleteFromFav = async (slug) => {
    let reqDelet = await axios.delete(`${URL}/deletemethod${slug}`);
    this.setState({
      favDrink: reqDelet.data,
    });
  };
  updateitem = (strDrink, idDrink, slug) => {
    this.setState({
      showUpdateform: true,
      strDrink: strDrink,
      idDrink: idDrink,
      slug: slug,
    });
  };
  updatestrDrink = (e) => this.setState({ strDrink: e.target.value });

  updateidDrink = (e) => this.setState({ idDrink: e.target.value });

  updateUrl = async () => {
    const updated = {
      strDrink: this.state.strDrink,
      idDrink: this.state.idDrink,
    };
    const request = await axios.put(
      `${URL}/updateMethod${this.state.slug}`,
      updated
    );
    this.setState({
      favDrink: request.data,
    });
  };

  render() {
    return (
      <div>
        {this.state.showUpdateform && (
          <FormApdute
            strDrink={this.state.strDrink}
            idDrink={this.state.idDrink}
            updatestrDrink={this.updatestrDrink}
            updateidDrink={this.updateidDrink}
            updateUrl={this.updateUrl}
          />
        )}
        {this.state.showFavDrink && (
          <CradFav
            favDrink={this.state.favDrink}
            deleteFromFav={this.deleteFromFav}
            updateitem={this.updateitem}
          />
        )}
      </div>
    );
  }
}

export default Favarouite;

import axios from "axios";
import React, { Component } from "react";
import CardApi from "./CardApi";
const URL = process.env.REACT_APP_URL;
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
    };
  }
  componentDidMount = async () => {
    const reqApi = await axios.get(`${URL}/apidata`);
    this.setState({
      dataApi: reqApi.data,
    });
    console.log(this.state.dataApi);
  };

  addtofav = async (obj) => {
    console.log(obj, "fav");
    await axios.post(`${URL}/postmethod`, obj);
  };
  render() {
    return (
      <>
        <CardApi dataApi={this.state.dataApi} addtofav={this.addtofav} />
      </>
    );
  }
}

export default Home;

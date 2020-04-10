import React, { Component } from "react";
//import { button } from "./App.css/src";
export default class Fr extends Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const resp = await fetch(url);
    const data = await resp.json();
    this.setState({ person: data.results[0], loading: false });
    //console.log(data.results[0]);
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div className="fr">
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <img src={this.state.person.picture.large} />
          </div>
        )}
      </div>
    );
  }
}

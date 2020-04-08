import React from "react";
import "./styles.css";
import axios from "axios";
import { render } from "react-dom";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";

//export
export default class App extends React.Component {
  //constructor
  constructor(props) {
    super(props);
    this.state = {
      gifs: {
        loading: false,
        error: false,
        data: []
      }
    };
  }
  //get api
  getGifs = str => {
    this.setState({
      gifs: {
        ...this.state.gifs,
        loading: true
      }
    });
    axios
      .get(`https://api.tenor.com/v1/search?q=${str}&key=DQKX49R3SWFV`)
      .then(results => {
        //console.log(...results.data.results);
        this.setState({
          gifs: {
            ...this.state.gifs,
            data: [...results.data.results],
            loading: false
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  //renderen
  render() {
    return (
      <div className="App">
        <h1>GIF Searcher</h1>
        <Form getGifs={this.getGifs} />
        {this.state.gifs.loading && <Loading />}
        {this.state.gifs.data.temp !== 0 && (
          <Results gifs={this.state.gifs.data} />
        )}
      </div>
    );
  }
}

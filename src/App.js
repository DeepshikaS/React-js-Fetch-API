import React, { Component } from "react";
//import Fr from "./components/Fetch_api";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import { random } from "lodash";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState({ quotes: quotes }, () => {
          this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
        })
      );
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <div className="App" id="quote-box">
        {this.selectedQuote
          ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}`
          : ""}
        <div>
          <Button
            buttonDisplayName="Next Quote"
            clickHandler={this.nextQuoteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;

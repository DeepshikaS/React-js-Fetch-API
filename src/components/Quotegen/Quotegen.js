import React, { Component } from "react";
//import Fr from "./components/Fetch_api";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteGenerator from "./QuoteGenerator";
import { random } from "lodash";
import "./QuoteGenerator";
import "typeface-roboto";
import { Grid, withStyles } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
};

class Quotegen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((data) => data.json())
      .then((quotes) =>
        this.setState({ quotes: quotes }, this.assignNewQuoteIndex)
      );
  }

  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
  }

  render() {
    return (
      <Grid
        className={this.props.classes.container}
        id="quote-box"
        justify="center"
        container
        style={{ backgroundColor: "#F6C5AF" }}
      >
        <Grid xs={11} lg={8} item>
          <QuoteGenerator
            selectedQuote={this.selectedQuote}
            assignNewQuoteIndex={this.assignNewQuoteIndex}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Quotegen);

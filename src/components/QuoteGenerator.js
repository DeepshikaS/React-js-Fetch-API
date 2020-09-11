import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

const QuoteGenerator = (props) => (
  <Card style={{ background: "#B2CEDE" }}>
    <CardContent>
      {props.selectedQuote ? (
        <Typography>
          <FontAwesomeIcon size="3x" icon={faQuoteLeft} />
          <br />
          &emsp; &emsp;&emsp; &emsp;
          {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typography>
      ) : null}
    </CardContent>
    <CardActions style={{ justifyContent: "center" }}>
      <Button
        style={{ background: "#E5C1BD" }}
        size="small"
        onClick={props.assignNewQuoteIndex}
      >
        Next Quote
      </Button>
    </CardActions>
  </Card>
);

export default QuoteGenerator;

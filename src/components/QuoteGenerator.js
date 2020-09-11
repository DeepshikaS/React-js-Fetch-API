import React from "react";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

const QuoteGenerator = (props) => (
  <Card>
    <CardContent>
      {props.selectedQuote ? (
        <Typography>
          {props.selectedQuote.quote} - {props.selectedQuote.author}
        </Typography>
      ) : null}
    </CardContent>
    <CardActions>
      <Button size="small" onClick={props.assignNewQuoteIndex}>
        Next Quote
      </Button>
    </CardActions>
  </Card>
);

export default QuoteGenerator;

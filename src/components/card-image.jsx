import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {},
  cardContent: {
    padding: "2rem"
  },
  cardMedia: {
    height: "400px",
    backgroundPosition: "top"
  },
  "@media only screen and (min-width: 1200px)": {
    card: {
      display: "flex"
    },
    cardContent: {
      flex: "1 0"
    },
    cardMedia: {
      width: "400px",
      height: "auto"
    }
  }
}));

export default function CardImage({ children, image, imageTitle, imageFirst }) {
  const classes = useStyles();

  const order = imageFirst ? (arr) => arr : (arr) => [...arr].reverse();

  return (
    <Card className={classes.card} raised={true}>
      {order([
        <CardMedia
          className={classes.cardMedia}
          title={imageTitle}
          image={image}
          key="media"
        />,
        <CardContent key="content" className={classes.cardContent}>
          {children}
        </CardContent>
      ])}
    </Card>
  );
}

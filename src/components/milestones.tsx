import React, { useState, ReactElement, CSSProperties } from "react";

import {
  Container,
  Step,
  Stepper,
  MobileStepper,
  StepButton,
  Card,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: { flexGrow: 1 },
  desktopStepper: {
    display: "none"
  },
  mobileStepper: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  "@media only screen and (min-width: 640px)": {
    mobileStepper: {
      display: "none"
    },
    desktopStepper: {
      display: "block"
    }
  }
});

export type MilestonesProps = {
  steps: Array<string>;
  children: Array<ReactElement> | ReactElement;
  initStep: number | string;
  onChange: (step: number) => void;
  title: string;
  style?: CSSProperties;
};

export default function ({
  steps,
  children,
  initStep,
  onChange,
  title,
  style
}: MilestonesProps) {
  const [activeStep, setActiveStep] = useState(parseInt(`${initStep}`) || 0);
  const classes = useStyles();

  const stepContent = Array.isArray(children) ? children : [children];

  const handleStep = (step: number) => () => {
    setActiveStep(step);
    onChange(step);
  };

  function desktopStepper() {
    return (
      <div className={classes.desktopStepper}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>{label}</StepButton>
            </Step>
          ))}
        </Stepper>
      </div>
    );
  }

  function mobileStepper() {
    return (
      <div className={classes.mobileStepper}>
        <MobileStepper
          className={classes.root}
          variant="dots"
          steps={steps.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleStep(activeStep + 1)}
              disabled={activeStep === steps.length - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleStep(activeStep - 1)}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }

  return (
    <Container maxWidth="md" style={style}>
      <Card style={{ padding: 20 }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {title}
          </Typography>
          {desktopStepper()}
          {mobileStepper()}
          <Container style={{ minHeight: 300 }}>
            {stepContent[activeStep]}
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}

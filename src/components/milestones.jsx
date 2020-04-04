import React, { useState } from "react";

import {
  Container,
  Step,
  Stepper,
  StepButton,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

export default function(props) {
  const { steps, children, initStep, onChange, title } = props;
  const [activeStep, setActiveStep] = useState(parseInt(initStep) || 0);

  const stepContent = Array.isArray(children) ? children : [children];

  const handleStep = step => () => {
    setActiveStep(step);
    onChange(step);
  };

  return (
    <Container maxWidth="md">
      <Card style={{ padding: 20 }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {title}
          </Typography>
          <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton onClick={handleStep(index)}>{label}</StepButton>
              </Step>
            ))}
          </Stepper>

          <Container style={{ minHeight: 300 }}>
            {stepContent[activeStep]}
          </Container>
        </CardContent>
      </Card>
    </Container>
  );
}

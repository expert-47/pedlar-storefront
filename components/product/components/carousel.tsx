import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const images = [
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
  },
  {
    label: "Coat",
    imgPath: "/grid-img1.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid item xs={12} sx={{ flexGrow: 1, alignItems: "center" }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 355,
                  display: "block",
                  maxWidth: 400,
                  justifyItems: "center",
                  overflow: "hidden",
                  width: "80%",
                  paddingLeft: "13%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews> */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={<Button></Button>}
        backButton={<Button size="small" onClick={handleBack} disabled={activeStep === 0}></Button>}
      />
    </Grid>
  );
}

export default SwipeableTextMobileStepper;

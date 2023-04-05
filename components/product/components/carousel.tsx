import * as React from "react";


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

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;



  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

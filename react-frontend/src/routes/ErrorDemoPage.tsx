import React from "react";
import { Box } from "@mui/material";

export default function Page() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 6) {
          clearInterval(interval); // Clear the interval before throwing the error
          throw new Error("Intentional error caused after few sec!");
        }
        return prevCounter + 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Full viewport height
        }}
      >
        <div>
          <h1>Counter: {counter}</h1>
          <p>
            This page will throw an error after 6 seconds (When counter reaches
            6) .
          </p>
        </div>
      </Box>
    </React.Fragment>
  );
}

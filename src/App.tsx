import { Box, Button } from "@mui/material";
import { range } from "lodash-es";
import { useState } from "react";
import "./App.css";
import { MyButton } from "./Button";

function App() {
  const [key, updateKey] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          updateKey((old) => !old);
        }}
      >
        Change
      </Button>
      <h1>Vite + React</h1>
      <Box display="flex" maxWidth="800px" flexWrap="wrap">
        {range(1, 100).map((i) => (
          <MyButton key={(key ? "first" : "second") + i}>
            {key ? "first" : "second"}
          </MyButton>
        ))}
      </Box>
    </>
  );
}

export default App;

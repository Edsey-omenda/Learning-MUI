import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import Feed from "./Components/Feed"
import Rightbar from "./Components/Rightbar"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./Components/Add";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme ({
    palette:{
      mode:mode
    }
  })
  
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} 
    color={"text.primary"}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar mode={mode} setMode={setMode}/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
   
  );
}

export default App;

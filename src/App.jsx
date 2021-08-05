import React from "react";
import NavBar from "./components/NavBar";
import ThemeProvider from "./components/context/ThemeProvider";
import Principal from "./components/Principal";
import HolaProvider from "./components/context/HolaProvider";



function App() {
  return (
    <HolaProvider>
     <ThemeProvider>
      <NavBar />
      <Principal />
     </ThemeProvider>
    </HolaProvider>
  );
}

export default App;

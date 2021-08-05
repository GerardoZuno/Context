import React from "react";
import { ThemeContext } from "./context/ThemeProvider";

const NavBar = () => {
  const { theme, cambioColor } = React.useContext(ThemeContext);
  //console.log(theme)

  return (
    <div
      style={{
        background: theme.background,
        color: theme.color,
      }}
    >
      <h1>Navbar</h1>
      <label>Color texto</label>
      <input
        type="color"
        onChange={(e) =>
          cambioColor({
            ...theme,
            color: e.target.value,
          })
        }
      />
      <label>Color de background</label>

      <input
        type="color"
        onChange={(e) =>
          cambioColor({
            ...theme,
            background: e.target.value,
          })
        }
      />
    </div>
  );
};

export default NavBar;

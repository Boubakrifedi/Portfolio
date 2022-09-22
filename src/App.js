import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";


function App() {

  const [theme, setTheme] = useState("light");
  // const useCursor = settings.useCustomCursor;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {/* {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={20}
              transitionTime={50}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )} */}
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

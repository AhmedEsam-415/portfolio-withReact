import { Container, Paper } from '@mui/material';
import Header from './components/1-Header/Header';
import Hero from './components/2-Hero/Hero';
import Main from './components/3-main/Main';
import ContactUs from './components/4-contact-us/ContactUs';
import Fotter from './components/5-Fotter/Fotter';

import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Button, Box } from '@mui/material';
import ScrollTop from './components/scroll/Scroll';

function App() {
  //! (Dark \ Light) => Mode
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const them = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={them}>
      <CssBaseline />

      <Container
        sx={{
          bgcolor: mode === 'dark' ? 'black' : 'white',
          boxShadow:
            '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
        }}
        className="Container"
      >
        <Header toggleMode={toggleMode} mode={mode} />
        <Hero mode={mode} />
        <Main mode={mode} />
        <ContactUs mode={mode} />
        <Fotter mode={mode} />

        <ScrollTop />
      </Container>
    </ThemeProvider>
  );
}

export default App;

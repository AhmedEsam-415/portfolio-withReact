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

import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعة الحركة (ملي ثانية)
      once: false, // تحصل مرة واحدة بس
      mirror: true, // دي "السر": بتخلي العنصر يختفي لما تتجاوزه وأنت طالع أو نازل
      offset: 50, // تقليل المسافة عشان يظهر بسرعة
      anchorPlacement: 'top-bottom', // بيخلي العنصر يظهر أول ما طرفه يلمس الشاشة
    });
  }, []);

  useEffect(() => {
    // بنعمل تأخير 100 ملي ثانية عشان ندي فرصة لـ Material UI يغير الثيم
    const timer = setTimeout(() => {
      AOS.refreshHard(); // دي أقوى من refresh العادية وبتمسح الحسابات القديمة
    }, 0);

    return () => clearTimeout(timer);
  }, [mode]); // الكود ده هيتنفذ "كل ما المود يتغير"

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

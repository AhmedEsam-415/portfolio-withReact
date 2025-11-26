import { Box, Paper, Stack } from '@mui/material';
import './main.scss';
import { useState } from 'react';

const Main = ({ mode }) => {
  const Buttons = [
    'All Projects',
    'HTML & CSS',
    'Java Script',
    'eact & MUI',
    'Node & Exprees',
  ];
  const [active, setActive] = useState(null);

  return (
    <Stack
      className="Main"
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'center' }}
      mt={3}
      gap={{ xs: 4, md: 0 }}
    >
      <Stack
        className="firstDiv"
        height={'100%'}
        width={{ xs: 250, md: 350 }}
        direction={'column'}
        alignSelf={{ xs: 'center', md: 'flex-start' }}
        gap={'10px'}
      >
        {Buttons.map((item, i) => {
          return (
            <button
              key={i}
              className={active == i ? 'active' : ''}
              onClick={() => setActive(i)}
            >
              {item}
            </button>
          );
        })}
      </Stack>

      <Stack
        className="secDiv"
        flexWrap={'wrap'}
        direction={'row'}
        gap={4}
        flexGrow={1}
      >
        {['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'ccc'].map(() => {
          return (
            <Paper er className="Card">
              <img
                src="/public/ahmedEsam.jpg"
                style={{ width: '100%' }}
                width={160}
                height={160}
                alt=""
              />
              <Box sx={{ pl: 1, my: 2 }}>
                <h1>Project Name</h1>
                <p
                  style={{
                    color:
                      mode === 'dark'
                        ? 'var(--supTitleInDark)'
                        : 'var(--supTitleInLight)',
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore aspernatur, assumenda ab rem et beatae vero at harum
                  eaque, impedit? Et!
                </p>

                <Stack
                  component={'nav'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Box className="navIcons">
                    <button
                      style={{
                        backgroundColor:
                          mode == 'light'
                            ? 'var(--supTitleInDark)'
                            : 'var(--supTitleInLight)',
                      }}
                    >
                      <a className="icon-link" href=""></a>
                    </button>
                    <button
                      style={{
                        backgroundColor:
                          mode == 'light'
                            ? 'var(--supTitleInDark)'
                            : 'var(--supTitleInLight)',
                      }}
                    >
                      <a className="icon-github" href=""></a>
                    </button>
                  </Box>

                  <Box className="naveBtn">
                    <button>More</button>
                    <a href="#FFFFFF" className="icon-arrow-right2" />
                  </Box>
                </Stack>
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Main;

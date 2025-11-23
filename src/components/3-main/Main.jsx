import { Box, Paper, Stack } from '@mui/material';
import './main.scss';
import { useState } from 'react';

const Main = () => {
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
      gap={4}
      mt={3}
    >
      <Stack className="firstDiv" width={200} direction={'column'} gap={'10px'}>
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

      <Stack className="secDiv" direction={'row'} gap={2} flexGrow={1}>
        <article className="Card">
          <img
            src="/public/ahmedEsam.jpg"
            style={{ width: '100%' }}
            width={160}
            height={160}
            alt=""
          />
          <Box>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              aspernatur, assumenda ab rem et beatae vero at harum eaque,
              impedit? Et!
            </p>

            <Stack
              component={'nav'}
              direction={'row'}
              justifyContent={'space-between'}
            >
              <Box className="navIcons">
                <button>
                  <a className="icon-link" href=""></a>
                </button>
                <button>
                  <a className="icon-github" href=""></a>
                </button>
              </Box>
              <Box className="naveBtn">
                <button>More</button>
                <span className="icon-arrow-right2" />
              </Box>
            </Stack>
          </Box>
        </article>
      </Stack>
    </Stack>
  );
};

export default Main;

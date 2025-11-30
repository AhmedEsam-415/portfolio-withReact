import { Box, Paper, Stack } from '@mui/material';
import './main.scss';
import { useState } from 'react';
import { Category } from '@mui/icons-material';

const myProjects = [
  {
    id: 1,
    title: 'react Project',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: 'react',
    img: '/public/ahmedEsam.jpg',
  },
  {
    id: 2,
    title: 'Css Project',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: 'css',
    img: '/public/ahmedEsam.jpg',
  },
  {
    id: 3,
    title: 'JavaScript Project',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: 'js',
    img: '/public/ahmedEsam.jpg',
  },
  {
    id: 4,
    title: 'Node Project',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: 'node',
    img: '/public/ahmedEsam.jpg',
  },
  {
    id: 5,
    title: 'Css Project 2',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: ['css', 'react'],
    img: '/public/ahmedEsam.jpg',
  },
  {
    id: 6,
    title: 'Boot Strap Project',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore aspernatur',
    Category: ['css', 'bootstrap'],
    img: '/public/ahmedEsam.jpg',
  },
];

const Main = ({ mode }) => {
  //# useState
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(myProjects);

  const Buttons = [
    { label: 'All Projects', value: 'all' },
    { label: 'HTML & CSS', value: 'css' },
    { label: 'JavaScript', value: 'js' },
    { label: 'React & MUI', value: 'react' },
    { label: 'Node & Exprees', value: 'node' },
    { label: 'Bootstrap', value: 'bootstrap' },
  ];

  const handleFilterAndActive = (value, index) => {
    setActive(index);

    if (value === 'all') {
      setProject(myProjects);
    } else {
      const filtered = myProjects.filter((item) => {
        if (Array.isArray(item.Category)) {
          return item.Category.map((c) => c.toLowerCase()).includes(value);
        } else {
          return item.Category.toLowerCase() === value;
        }
      });

      setProject(filtered);
    }
  };

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
              onClick={() => handleFilterAndActive(item.value, i)}
            >
              {item.label}
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
        {project.map((item) => {
          return (
            <Paper key={item.id} className="Card">
              <img
                src={item.img}
                style={{ width: '100%' }}
                width={160}
                height={160}
                alt=""
              />
              <Box sx={{ pl: 1, my: 2 }}>
                <h1>{item.title}</h1>
                <p
                  style={{
                    color:
                      mode === 'dark'
                        ? 'var(--supTitleInDark)'
                        : 'var(--supTitleInLight)',
                  }}
                >
                  {item.paragraph}
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
                    <a href="#" className="icon-arrow-right2" />
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

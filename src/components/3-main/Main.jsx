import { Box, Paper, Stack } from '@mui/material';
import './main.scss';
import { useState } from 'react';
import { Category } from '@mui/icons-material';
import { myProjects } from './myProjects';

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, easeInOut, motion } from 'motion/react';

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

  const MotionPaper = motion(Paper);

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
        <AnimatePresence>
          {project.map((item, i) => {
            const isNew = i === project.length - 1;

            if (item.title != '') {
              return (
                //! Start Filter Transition
                <MotionPaper
                  layout
                  initial={isNew ? { scale: 0.8, y: 20, opacity: 0 } : false}
                  animate={isNew ? { scale: 1, y: 0, opacity: 1 } : false}
                  transition={
                    isNew
                      ? {
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          mass: 0.8,
                        }
                      : false
                  }
                  exit={isNew ? { opacity: 0, y: -50 } : false}
                  key={i}
                  className="Card"
                >
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
                      {item.text}
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
                          <a
                            className="icon-link"
                            target="_blank"
                            href={item.linkProject}
                          ></a>
                        </button>

                        <button
                          style={{
                            backgroundColor:
                              mode == 'light'
                                ? 'var(--supTitleInDark)'
                                : 'var(--supTitleInLight)',
                          }}
                        >
                          <a
                            className="icon-github"
                            target="_blank"
                            href={item.linkGitHub}
                          ></a>
                        </button>
                      </Box>

                      <Box className="naveBtn">
                        <button>More</button>
                        <a href="#" className="icon-arrow-right2" />
                      </Box>
                    </Stack>
                  </Box>
                </MotionPaper>
              );
            }
          })}
        </AnimatePresence>
      </Stack>
    </Stack>
  );
};

export default Main;

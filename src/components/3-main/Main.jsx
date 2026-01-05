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

  return (
    <Stack
      className="Main"
      direction={{ xs: 'column', md: 'row' }}
      alignItems={{ xs: 'center' }}
      mt={3}
      gap={{ xs: 4, md: 0 }}
      // 2. أنيميشن للكونتينت كله وهو بيظهر لأول مرة
      data-aos="fade-up"
      data-aos-delay={1400} // تتابع في الظهور (Stagger)
    >
      <Stack
        className="firstDiv"
        height={'100%'}
        width={{ xs: 250, md: 350 }}
        direction={'column'}
        alignSelf={{ xs: 'center', md: 'flex-start' }}
        gap={'10px'}
        // أنيميشن للقائمة الجانبية (تظهر من الشمال مثلاً)
        data-aos="fade-right"
      >
        {Buttons.map((item, i) => (
          <button
            key={i}
            className={active == i ? 'active' : ''}
            onClick={() => handleFilterAndActive(item.value, i)}
          >
            {item.label}
          </button>
        ))}
      </Stack>

      <Stack
        className="secDiv"
        flexWrap={'wrap'}
        direction={'row'}
        gap={4}
        flexGrow={1}
      >
        {project.map((item, i) => {
          if (item.title !== '') {
            return (
              <Paper
                key={item.title} // يفضل تستخدم عنوان المشروع أو id بدل الـ i
                className="Card"
                // 3. أنيميشن للكروت وهي بتظهر من تحت لفوق
                data-aos="fade-up"
                data-aos-delay={i * 100} // تتابع في الظهور (Stagger)
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
              </Paper>
            );
          }
          return null;
        })}
      </Stack>
    </Stack>
  );
};

export default Main;

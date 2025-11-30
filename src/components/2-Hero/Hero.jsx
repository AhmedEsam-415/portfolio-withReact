import { Stack } from '@mui/material';
import './hero.scss';

const Hero = ({ mode }) => {
  const icons = [
    'icon-facebook',
    'icon-instagram',
    'icon-github',
    'icon-linkedin',
  ];

  return (
    <Stack
      component={'section'}
      className=" Hero"
      direction={{ xs: 'column', md: 'row' }}
      alignItems={'center '}
    >
      <div>
        <div className="parent-avatar">
          <img src="/public/ahmedEsam-modified.png" alt="" />
          <span className="icon-verified" />
        </div>

        <h1>
          Front-End Developer focused on building fast, user-friendly, and
          visually clear interfaces.
        </h1>

        <p
          style={{
            color:
              mode == 'dark'
                ? 'var(--supTitleInDark)'
                : 'var(--supTitleInLight)',
          }}
        >
          I’m Ahmed Esam, a Front-End Developer with a strong focus on building
          modern, clean, and scalable web applications. My expertise lies in
          React, JavaScript, CSS, and UI frameworks like Material UI, where I
          design and code responsive interfaces that deliver great user
          experiences. I’m constantly learning new tools and best practices to
          keep improving both my workflow and the quality of my code. Whether
          I'm designing an e-commerce interface, creating reusable UI
          components, or improving website performance, I always aim for
          clarity, simplicity, and user-focused design.
        </p>

        <Stack className="media" direction={'row'} gap={2} mt={3}>
          {icons.map((item, i) => {
            return (
              <span key={i}>
                <a href="#" className={item}></a>
              </span>
            );
          })}
        </Stack>
      </div>

      <div className="Animation">Animation</div>
    </Stack>
  );
};

export default Hero;

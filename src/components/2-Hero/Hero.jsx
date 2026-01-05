import { Stack } from '@mui/material';
import './hero.scss';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Hero = ({ mode }) => {
  const icons = [
    {
      iconLink: 'https://www.facebook.com/MeshAhmedEsam/',
      iconName: 'icon-facebook',
    },
    {
      iconLink: 'https://www.instagram.com/ahmedbnessam_/',
      iconName: 'icon-instagram',
    },
    { iconLink: 'https://github.com/AhmedEsam-415', iconName: 'icon-github' },
    {
      iconLink: 'https://www.linkedin.com/in/ahmed-esam-0bb173297/',
      iconName: 'icon-linkedin',
    },
  ];

  return (
    <Stack
      component={'section'}
      className=" Hero"
      direction={{ xs: 'column', md: 'row' }}
      alignItems={'center '}
      data-aos="fade-up"
      data-aos-delay={800} // تتابع في الظهور (Stagger)
    >
      <div>
        <div className="parent-avatar">
          <motion.img
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.1)' }}
            transition={{ damping: 7, type: 'spring' }}
            src="/public/ahmedEsam-modified.png"
            alt=""
          />

          <motion.span
            initial={{ transform: 'scale(0)' }}
            animate={{ transform: 'scale(1.2)' }}
            transition={{ damping: 7, type: 'spring' }}
            className="icon-verified"
          />
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

        <Stack
          className="media"
          direction={'row'}
          gap={2}
          mt={3}
          data-aos="fade-left"
          data-aos-delay={1000} // تتابع في الظهور (Stagger)
        >
          {icons.map((item, i) => {
            return (
              <span key={i}>
                <a
                  href={item.iconLink}
                  className={item.iconName}
                  target="_blank"
                ></a>
              </span>
            );
          })}
        </Stack>
      </div>

      <div className="Animation">
        <DotLottieReact
          src="/public/animation/Programming Computer.json"
          loop
          autoplay
        />
      </div>
    </Stack>
  );
};

export default Hero;

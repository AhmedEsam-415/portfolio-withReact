import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './header.scss';
import { Box, Paper } from '@mui/material';

const Header = ({ toggleMode, mode }) => {
  const [showModel, setshowModel] = useState(false);
  const linkes = ['About Me', 'Projects', 'Contact Us'];

  return (
    <header>
      {/* 1. اللوجو أو العلامة اللي في الأول */}
      <span data-aos="fade-down" data-aos-duration="600" />

      {/* زرار الموبايل */}
      <button onClick={() => setshowModel(true)} data-aos="fade-down">
        <DensityMediumIcon fontSize="medium" />
      </button>

      {/* 2. الناف بار الرئيسي (الـ Desktop) */}
      <Paper
        component={'nav'}
        sx={{ borderRadius: '40px' }}
        data-aos="fade-down" // هيظهر من فوق لتحت
        data-aos-duration="1000"
      >
        <ul>
          {linkes.map((item, i) => {
            return (
              <li
                key={i}
                data-aos="fade-up" // الكلام نفسه يظهر من تحت لفوق
                data-aos-delay={400 + i * 100} // أهم حتة: كل لينك يتأخر عن اللي قبله شوية
              >
                <a
                  style={{ color: mode == 'dark' ? 'white' : 'black' }}
                  href="#"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </Paper>

      {/* 3. زرار تغيير المود */}
      <button
        style={{
          backgroundColor: mode == 'dark' ? '#1E1E1E' : 'white',
          color: mode == 'dark' ? 'white' : 'black',
        }}
        onClick={() => toggleMode()}
        data-aos="zoom-in" // ده نخليه يعمل زووم بسيط
        data-aos-delay="1200"
      >
        {mode == 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </button>

      {/* 4. الـ Model (القائمة الجانبية) */}
      {showModel && (
        <div className="fixed-model">
          {' '}
          {/* يُفضل إضافة كلاس للأنيميشن هنا برضه لو حبيت */}
          <ul
            style={{
              backgroundColor: mode == 'dark' ? 'var(--secondry)' : 'white',
            }}
          >
            <li>
              <CloseIcon fontSize="small" onClick={() => setshowModel(false)} />
            </li>
            {linkes.map((item, i) => (
              <li key={i}>
                <a
                  style={{ color: mode == 'dark' ? 'white' : 'black' }}
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

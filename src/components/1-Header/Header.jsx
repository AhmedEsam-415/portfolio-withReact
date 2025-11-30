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
      <span />

      <button onClick={() => setshowModel(true)}>
        <DensityMediumIcon fontSize="medium" />
      </button>

      <Paper
        component={'nav'}
        sx={{
          borderRadius: '40px',
        }}
      >
        <ul>
          {linkes.map((item, i) => {
            return (
              <li key={i}>
                <a
                  style={{
                    color: mode == 'dark' ? 'white' : 'black',
                  }}
                  href="#"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </Paper>

      <button
        style={{
          backgroundColor: mode == 'dark' ? '#1E1E1E' : 'white',
          color: mode == 'dark' ? 'white' : 'black',
        }}
        onClick={() => toggleMode()}
      >
        {mode == 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </button>

      {showModel && (
        <div>
          <ul
            style={{
              backgroundColor: mode == 'dark' ? 'var(--secondry)' : 'white',
            }}
          >
            <li>
              <CloseIcon fontSize="small" onClick={() => setshowModel(false)} />
            </li>

            {linkes.map((item, i) => {
              return (
                <li key={i}>
                  <a
                    style={{
                      color: mode == 'dark' ? 'white' : 'black',
                    }}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

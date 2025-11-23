import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import './header.scss';
import { Box } from '@mui/material';

const Header = ({ toggleMode, mode }) => {
  const [showModel, setshowModel] = useState(false);
  const linkes = ['About', 'Article', 'Projects', 'Speaking', 'Contact'];

  return (
    <header>
      <span />

      <button onClick={() => setshowModel(true)}>
        <DensityMediumIcon fontSize="medium" />
      </button>

      <Box
        component={'nav'}
        sx={{
          bgcolor: mode === 'dark' ? 'var(--bgHeader)' : '#FFFFFF',
        }}
      >
        <ul>
          {linkes.map((item, i) => {
            return (
              <li key={i}>
                <a
                  style={{
                    color: mode == 'dark' ? 'var(--supTitle)' : 'black',
                  }}
                  href="#"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </Box>

      <button
        style={{
          bgcolor: mode == 'dark' ? 'var(--supTitle)' : 'white',
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

import Fab from '@mui/material/Fab';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useScrollTrigger, Zoom } from '@mui/material';

const ScrollTop = () => {
  const trigger = useScrollTrigger();
  return (
    <Zoom in={trigger}>
      <Fab
        onClick={() => {
          window.scrollTo(500, 0);
        }}
        sx={{ position: 'fixed', bottom: 40, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpOutlinedIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollTop;

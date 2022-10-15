import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  const [open, setOpen] = React.useState(true);
  
  return (
    <div>
      <Backdrop
        sx={{ color: 'yellow', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        setOpen={setOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}



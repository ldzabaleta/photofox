import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const InProgress = () => {
  return (
    <Stack sx={{ color: 'black' }} spacing={2} direction="row" justifyContent="center">
      <CircularProgress color="inherit" />
    </Stack>
  );
}

export default InProgress;
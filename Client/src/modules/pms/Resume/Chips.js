import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chips({lable}) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1} spacing={1} flexWrap="wrap">
      <Chip label={lable} onDelete={handleDelete} />
    </Stack>
  );
}
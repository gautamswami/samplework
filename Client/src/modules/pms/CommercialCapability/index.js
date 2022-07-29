import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ClippedDrawer from "../header"

import styled from "styled-components"
import Commercial from "./Commercial"

const ContentBox = styled(Box)`
margin: 0!important;
background-color:white!important;
`
// 

export default function CommercialCapability() {
  return (
   <>
   <Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Commercial />
      </ContentBox>
</Box>
   </>
  );
}

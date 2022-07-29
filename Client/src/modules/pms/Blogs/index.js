import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';

import styled from "styled-components"
import BlogsComp from './blogs';
import BlogsHeader from './header';
const ContentBox = styled(Box)`
${'' /* background-color: #F5F5F5 !important; */}
`
export default function Blogs() {
  return (
<>
<Box sx={{ display: 'flex', backgroundColor:'white'  }}>
<BlogsHeader />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3, pt:3, backgroundColor:'white' }}>

     <BlogsComp />
     </ContentBox>
     </Box>

</>
  )
}

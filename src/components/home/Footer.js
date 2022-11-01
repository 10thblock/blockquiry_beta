/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, useMediaQuery, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/system';
// import { isMobile } from 'react-device-detect';
import { tokens } from '../../tokens';

// const useMobileBreakpoint = (target = 600) => {
//   const isDesktop = useMediaQuery(`(min-width:${target}px)`);
//   return !isDesktop || isMobile;
// };

function Copyright() {
  return (
    <>
      {/* {' © '}{new Date().getFullYear()}. */}

        <Button size="small" sx={{ textTransform: 'none', bgColor: 'none' }}>
        inquiries@blockquiry.com
        </Button>

    </>
  );
}

const Item = styled(Box)(() => ({
  px: 2,
  color: tokens.token_typography_regular,
  fontFamily: 'Roboto, Arial,  sans-serif',
  fontSize: '0.775rem',
  fontWeight: 500,
  whiteSpace: 'nowrap',
}));

export default function Footer() {
  // const isMobile = useMobileBreakpoint(600);
  return (
    <Box
      component="footer"
      position="fixed"
      bottom={0}
      width="100%"
      sx={{ backgroundColor: tokens.token_grey_100 }}
    >
      <Grid container>
        <Grid
          xs={6}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            px: 5,
            paddingRight: 5,
          }}
        >

            <Button
            disabled 
              size="small"
              sx={{ textTransform: 'none', bgColor: 'none' }}
            >
              web
            </Button>
  
  
            <Button
            disabled 
              size="small"
              sx={{ textTransform: 'none', bgColor: 'none' }}
            >
              tor
            </Button>
 
        </Grid>
        <Grid
          xs={6}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 5,
            paddingRight: 2,
          }}
        >
          <Copyright />
          {/* <Link href="/about/blockquiry">
            <Item sx={{ marginRight: 5 }}>About</Item>
          </Link>
          <Link href="/about/blockquiry">
            <Item>Services</Item>
          </Link> */}
        </Grid>

        {/* {!isMobile && (
          <Grid xs={12} sm={12} md={4} lg={4} xl={4} flexGrow={1}>
            <Item>
           
            </Item>
          </Grid>
        )} */}
        <Grid
          xs={0}
          sm={0}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            px: 5,
            paddingRight: 5,
          }}
        >
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Stack direction="row">

                <Button
                disabled 
                  size="small"
                  sx={{ textTransform: 'none', bgColor: 'none' }}
                >
                  Privacy
                </Button>



                <Button
                disabled 
                  size="small"
                  sx={{ textTransform: 'none', bgColor: 'none' }}
                >
                  Terms
                </Button>
     
            </Stack>
          </Box>
        </Grid>
      </Grid>
      {/* {isMobile && (
        <Grid xs={12} sm={12} md={4} lg={4} xl={4} flexGrow={1}>
          <Item>
            <Copyright />
          </Item>
        </Grid>
      )} */}
    </Box>
  );
}

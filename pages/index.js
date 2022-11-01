/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Stack, Box, Button, Typography } from '@mui/material/';
import { styled } from '@mui/system';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useRouter } from 'next/router';
// import { getSession } from 'next-auth/client';
import Footer from '../src/components/home/Footer';
import { tokens } from '../src/tokens';
import HomeAppBar from '../src/components/home/HomeAppBar';

// eslint-disable-next-line no-empty-pattern

function ColorText({ children }) {
  return <span style={{ color: tokens.palette_secondary }}>{children}</span>;
}
const BlockTypo = styled(Typography)(() => ({
  fontFamily: 'play',
  opacity: 1,
  fontSize: '1.00rem',
  fontWeight: 700,
  lineHeight: '1.25rem',
  textAlign: 'center',
  paddingLeft: 0,
  whiteSpace: 'wrap',
  color: tokens.palette_primary,
}));

const Search = styled('div')(() => ({
  border: '1px solid',
  borderColor: tokens.token_search_border_grey,
  borderRadius: 24,
  maxHeight: 50,
  display: 'flex',
  alignItems: 'center',
  shadows: 2,
  '&:hover': {
    shadows: 2,
  },
}));

const SearchButton = styled(Button)(() => ({
  fontFamily: 'Roboto, Arial,  sans-serif',
  fontSize: '0.8750em',
  fontWeight: 500,
  textTransform: 'none',
  color: tokens.token_typography_regular_emphasized,
  border: '1px, solid',
  borderColor: tokens.token_grey_50,
  backgroundColor: tokens.token_grey_50,
  '&:hover,&:focus': {
    border: '1px solid',
    borderColor: tokens.token_grey_300,
    boxShadow: '0px 1px 1px rgb(0 0 0 / 10%)',
  },
}));

export default function Home({ session }) {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <>
      <Head>
        <title>blockquiry</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Head>
        <meta
          content="block explorer, bitcoin explorer, blockchain explorer, transaction search, bitcoin address, ethereum address, ether, ethereum blockchain, ethereum transaction, ethereum unconfirmed transaction, ethereum explorer, etherscan"
          name="keywords"
        />
      </Head>
      <Head>
        <meta
          content="Blockchain explorer, crypto transaction tracking search engine and crypto news aggregator"
          property="og:description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HomeAppBar />
      </Box>

      <Container disableGutters maxWidth="sm">
        <Box
          sx={{
            mt: '170px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            width={272}
            height={64}
            src="/blockquiry272x64.png"
            alt="logo"
          />
        </Box>

        <form>
          <Box sx={{ flexGrow: 1, paddingTop: '20px' }}>
            <Box m={1} maxWidth="584px" flexDirection="row">
              <Search
                sx={{
                  boxShadow: 0,
                  '&:hover': { boxShadow: '1px 1px 6px rgb(32 33 36 / 28%)' },
                }}
              >
                <IconButton
                  onClick={search}
                  type="submit"
                  sx={{ p: '10px', color: tokens.palette_primary }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <input
                  style={{
                    width: '100%',
                    height: '35px',
                    border: 'none',
                    outline: 'none',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                  ref={searchInputRef}
                  type="text"
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  onClick={() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.value = '';
                    }
                  }}
                  sx={{ p: '10px', color: tokens.palette_secondary }}
                  aria-label="directions"
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Search>
            </Box>
          </Box>

          <Stack
            paddingTop="18px"
            direction="row"
            spacing={1}
            justifyContent="center"
            maxWidth="584px"
          >
            <SearchButton type="submit" onClick={search}>
              Block Search
            </SearchButton>
            <Tooltip title="Advanced Search Coming Soon" placement="bottom">
              <Box>
                <SearchButton disabled type="submit" onClick={search}>
                  Advanced Search
                </SearchButton>
              </Box>
            </Tooltip>
          </Stack>
        </form>
        <Box
          maxWidth="584px"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            mt: '30px',
            mx: '20px',
          }}
        >
          {/* <Box
            sx={{
              maxWidth: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '20px',
              padding: '5px',
            }}
          > */}
          <BlockTypo sx={{ textAlign: 'center' }}>
            <b>
              <ColorText>b</ColorText>lock<ColorText>&nbsp;•&nbsp;</ColorText>
              quir
              <ColorText>&nbsp;•&nbsp;</ColorText>y
            </b>{' '}
            an act of asking for blockchain information.
          </BlockTypo>
        </Box>
        {/* </Box> */}
      </Container>
      <Footer />
    </>
  );
}

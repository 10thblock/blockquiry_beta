/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Box, Button, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useRef } from 'react';
import { tokens } from '../../tokens';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
// import ReportDialog from '../accountdetails/reportcryptocrime/ReportDialog';

const ReportCryptoCrimeButton = styled(Button)(() => ({
  fontFamily: 'Roboto, Arial,  sans-serif',
  fontSize: '0.7500em',
  fontWeight: 500,
  maxHeight: '32px',
  textTransform: 'none',
  color: tokens.palette_primary,
  border: '1px, solid',
  borderRadius: 18,
  paddingTop: '2px',
  paddingBottom: '2px',
  paddingRight: '8px',
  paddingLeft: '8px',
  backgroundColor: tokens.token_grey_100,
  '&:hover,&:focus': {
    borderColor: tokens.token_grey_300,
  },
}));

const LinkButton = styled(Button)(() => ({
  fontFamily: 'Roboto, Arial,  sans-serif',
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'none',
  color: tokens.token_link_grey,
  lineHeight: '16.8px',
  display: 'inline-block',
  textAlign: 'left',
  paddingRight: '16px',
  marginTop: '10px',
}));

const Item = styled(Button)(() => ({
  textTransform: 'none',
  fontFamily: 'Roboto,arial,sans-serif',
  opacity: 1,
  display: 'inline-block',
  fontStretch: '100%',
  fontSize: '1.00rem',
  fontWeight: 500,
  fontStyle: 'normal',
  textDecorationThickness: 'auto',
  fontVariantCaps: 'normal',
  lineHeight: '2.25rem',
  letterSpacing: '0rem',
  textAlign: 'left',
  paddingLeft: 4,
  color: tokens.token_text_grey_on_white,
  '&:hover': {
    backgroundColor: tokens.token_grey_100,
  },
}));

const MenuTypo = styled(Typography)(() => ({
  textTransform: 'none',
  fontFamily: 'Roboto,arial,sans-serif',
  opacity: 1,
  display: 'inline-block',
  fontStretch: '100%',
  fontSize: '1.00rem',
  fontWeight: 500,
  fontStyle: 'normal',
  textDecorationThickness: 'auto',
  fontVariantCaps: 'normal',
  lineHeight: '1.25rem',
  letterSpacing: '0rem',
  textAlign: 'left',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '12px',
  paddingBottom: '12px',
  color: tokens.token_text_grey_on_white,
}));

const drawerWidth = 240;
const navItems = [
  <Stack spacing={1}>
    <Link href="/about/blockquiry/">
      <MenuTypo>About</MenuTypo>
    </Link>
    <Link href="/about/blockquiry/howsearchworks">
      <MenuTypo>How Search Works</MenuTypo>
    </Link>
    <Link href="/about/blockquiry/privacy">
      <MenuTypo>Privacy</MenuTypo>
    </Link>
    <Link href="/about/blockquiry/terms">
      <MenuTypo>Terms</MenuTypo>
    </Link>
    <Link href="mailto:inquiries@blockquiry.com">
      <MenuTypo>Contact</MenuTypo>
    </Link>
    <Divider />
    <Link href="/web/blockquiry">
      <MenuTypo sx={{ paddingLeft: '35px' }}>web.blockquiry</MenuTypo>
    </Link>
    <Link href="/web/blockquiry">
      <MenuTypo sx={{ paddingLeft: '35px' }}>tor.blockquiry</MenuTypo>
    </Link>
  </Stack>,
];

function ColorText({ children }) {
  return <span style={{ color: tokens.palette_secondary }}>{children}</span>;
}
const Search = styled('div')(({ theme }) => ({
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

function HomeAppBar(props) {
  const searchInputRef = useRef(null);
  // const { data: session } = useSession();

  const { push, asPath } = useRouter();

  // const handleSignOut = () => signOut({ redirect: false });

  // const handleSingIn = () => push(`/auth/signin?callbackUrl=${asPath}`);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        component="a"
        href=""
        sx={{
          my: 2,
          display: { xs: 'block', sm: 'none' },
          flexGrow: 1,
          fontFamily: 'play',
          fontWeight: 700,
          color: tokens.palette_primary,
          textDecoration: 'none',
        }}
      >
        <ColorText>b</ColorText>lockquiry
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ mt: 2, display: 'flex' }}>
      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: tokens.token_surface }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mx: 'auto',
              display: { sm: 'none' },
              color: tokens.token_text_grey_on_white,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link href="/about/blockquiry">
              <LinkButton disabled>About</LinkButton>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box>
          <ReportCryptoCrimeButton
    disabled 
        style={{ margin: 0 }}
        startIcon={
          <FlagCircleIcon
            style={{
              marginLeft: 0,
              marginRight: 0,
              height: '18px',
              width: '18px',
              color: tokens.token_red_typography,
            }}
          />
        }
      >
        Report Crypto Crime
      </ReportCryptoCrimeButton>
            {/* <ReportDialog /> */}
          </Box>
        </Toolbar>

        <Box
          mx="16px"
          sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
        />

        <Box
          maxWidth="650px"
          maxHeight="48px"
          flexDirection="row"
          sx={{ ml: { xs: -2, sm: '96px' } }}
        />
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

HomeAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomeAppBar;

import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  AppBar, Toolbar, Box, IconButton, Drawer, List,
  ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Container
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import CodeIcon from '@mui/icons-material/Code'

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [drawerOpen, setDrawer]   = useState(false)
  const theme                     = useTheme()
  const isMobile                  = useMediaQuery(theme.breakpoints.down('md'))
  const location                  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setDrawer(false) }, [location])

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10,10,15,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(108,99,255,0.15)' : 'none',
          transition: 'all 0.4s ease',
          animation: 'slideDown 0.6s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <Box
                sx={{
                  width: 38, height: 38, borderRadius: '10px',
                  background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              >
                <CodeIcon sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Box
                component="span"
                sx={{
                  fontWeight: 800, fontSize: '1.2rem',
                  background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}
              >
                Abdullah
              </Box>
            </NavLink>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} style={{ textDecoration: 'none' }}>
                    {({ isActive }) => (
                      <Box
                        component="span"
                        sx={{
                          px: 2, py: 1, borderRadius: '8px',
                          fontSize: '0.9rem', fontWeight: 600,
                          color: isActive ? '#6C63FF' : '#E8E8F0',
                          background: isActive ? 'rgba(108,99,255,0.12)' : 'transparent',
                          border: isActive ? '1px solid rgba(108,99,255,0.3)' : '1px solid transparent',
                          transition: 'all 0.25s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            color: '#6C63FF',
                            background: 'rgba(108,99,255,0.08)',
                          },
                        }}
                      >
                        {link.label}
                      </Box>
                    )}
                  </NavLink>
                ))}
              </Box>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <IconButton onClick={() => setDrawer(true)} sx={{ color: '#E8E8F0' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawer(false)}
        PaperProps={{
          sx: {
            width: 260,
            background: '#0D0D14',
            borderLeft: '1px solid rgba(108,99,255,0.2)',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, mb: 2 }}>
          <IconButton onClick={() => setDrawer(false)} sx={{ color: '#E8E8F0' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link, i) => (
            <ListItem key={link.path} disablePadding>
              <NavLink to={link.path} style={{ width: '100%', textDecoration: 'none' }}>
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      mx: 1, borderRadius: '10px', mb: 0.5,
                      background: isActive ? 'rgba(108,99,255,0.15)' : 'transparent',
                      color: isActive ? '#6C63FF' : '#E8E8F0',
                      animation: `fadeInRight 0.4s ease ${i * 0.07}s both`,
                      '&:hover': { background: 'rgba(108,99,255,0.1)', color: '#6C63FF' },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }}
                    />
                  </ListItemButton>
                )}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

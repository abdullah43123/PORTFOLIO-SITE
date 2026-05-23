import React from 'react'
import { Box, Container, Typography, IconButton, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'
import { NavLink } from 'react-router-dom'

const socials = [
  { icon: <GitHubIcon />,   href: 'https://github.com/abdullah43123',   label: 'GitHub' },
  { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/abdullah-aslam-464a37229/', label: 'LinkedIn' },
  // { icon: <TwitterIcon />,  href: 'https://twitter.com',  label: 'Twitter' },
  // { icon: <EmailIcon />,    href: 'aabdullahaslam91@gmail.com', label: 'Email' },
]

const links = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills',   path: '/skills' },
  { label: 'Contact',  path: '/contact' },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: '#0D0D14',
        borderTop: '1px solid rgba(108,99,255,0.15)',
        pt: 8, pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
            gap: 6,
            mb: 6,
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800, mb: 2,
                background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            >
              Abdullah
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 280, lineHeight: 1.8 }}>
              Full Stack Developer passionate about building beautiful, performant web experiences.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: '#8888AA',
                    border: '1px solid rgba(108,99,255,0.2)',
                    borderRadius: '8px',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: '#6C63FF',
                      borderColor: '#6C63FF',
                      background: 'rgba(108,99,255,0.1)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: '#E8E8F0' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {links.map((l) => (
                <NavLink key={l.path} to={l.path} style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#8888AA',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#6C63FF' },
                    }}
                  >
                    {l.label}
                  </Typography>
                </NavLink>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2, color: '#E8E8F0' }}>
              Get In Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              aabdullahaslam91@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              +92 304 2506189
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available for freelance work
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(108,99,255,0.1)', mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Abdullah. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with React + Vite + MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

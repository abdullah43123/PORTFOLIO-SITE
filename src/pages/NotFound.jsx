import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        pt: 10,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          sx={{
            fontSize: { xs: '7rem', md: '10rem' },
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 0.6s ease both',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 2, animation: 'fadeInUp 0.6s ease 0.1s both' }}
        >
          Page Not Found
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ mb: 5, fontSize: '1.05rem', animation: 'fadeInUp 0.6s ease 0.2s both' }}
        >
          Looks like this page wandered off into the void. Let's get you back on track.
        </Typography>
        <Box sx={{ animation: 'fadeInUp 0.6s ease 0.3s both' }}>
          <Button
            component={NavLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            sx={{ fontSize: '1rem' }}
          >
            Back to Home
          </Button>
        </Box>

        {/* Floating emoji */}
        <Typography
          sx={{
            fontSize: '5rem',
            mt: 6,
            display: 'block',
            animation: 'float 4s ease-in-out infinite',
          }}
        >
          🚀
        </Typography>
      </Container>
    </Box>
  )
}

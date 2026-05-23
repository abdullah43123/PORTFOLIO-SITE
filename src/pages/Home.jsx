import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Typography, Button, Grid, Avatar, Chip } from '@mui/material'
import { NavLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DownloadIcon from '@mui/icons-material/Download'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const roles = ['Full Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver']

const stats = [
  { value: '3+',  label: 'Years Experience' },
  { value: '50+', label: 'Projects Done' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Technologies' },
]

function TypeWriter({ words }) {
  const [text, setText]       = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDel]    = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const speed   = deleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDel(true), 1800)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setText(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDel(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words])

  return (
    <Box component="span" sx={{ color: '#6C63FF' }}>
      {text}
      <Box
        component="span"
        sx={{
          display: 'inline-block', width: '2px', height: '1em',
          background: '#6C63FF', ml: '2px', verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </Box>
  )
}

// Floating orbs background
function Orbs() {
  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {[
        { size: 500, top: '-10%', left: '-10%', color: 'rgba(108,99,255,0.12)', delay: '0s' },
        { size: 400, top: '40%',  right: '-8%', color: 'rgba(255,101,132,0.1)', delay: '2s' },
        { size: 300, bottom: '5%', left: '30%', color: 'rgba(108,99,255,0.08)', delay: '1s' },
      ].map((orb, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: orb.size, height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom,
            animation: `float 6s ease-in-out ${orb.delay} infinite`,
          }}
        />
      ))}
    </Box>
  )
}

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pt: { xs: 10, md: 0 },
        }}
      >
        <Orbs />

        {/* Grid lines */}
        <Box
          sx={{
            position: 'absolute', inset: 0, zIndex: 0,
            backgroundImage: `
              linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ animation: 'fadeInLeft 0.8s ease both' }}>
                <Chip
                  label="👋 Available for work"
                  sx={{
                    mb: 3, background: 'rgba(108,99,255,0.12)',
                    color: '#6C63FF', border: '1px solid rgba(108,99,255,0.3)',
                    fontWeight: 600, fontSize: '0.85rem',
                    animation: 'pulse-glow 3s ease-in-out infinite',
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem', lg: '4.8rem' },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  Hi, I'm{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Abdullah
                  </Box>
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
                    fontWeight: 700,
                    mb: 3,
                    color: '#E8E8F0',
                    minHeight: '2.5rem',
                  }}
                >
                  <TypeWriter words={roles} />
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.8 }}
                >
                  I craft high-performance web applications with clean code and stunning UIs.
                  Passionate about turning complex problems into elegant digital solutions.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    component={NavLink}
                    to="/projects"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontSize: '1rem' }}
                  >
                    View My Work
                  </Button>
                  <Button
                    component="a"
                    href="/resume.pdf"
                    download
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    sx={{
                      fontSize: '1rem',
                      borderColor: 'rgba(108,99,255,0.4)',
                      color: '#E8E8F0',
                      '&:hover': {
                        borderColor: '#6C63FF',
                        background: 'rgba(108,99,255,0.08)',
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  {[
                    { icon: <GitHubIcon />,   href: 'https://github.com/abdullah43123' },
                    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/abdullah-aslam-464a37229/' },
                  ].map((s, i) => (
                    <Box
                      key={i}
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: 44, height: 44, borderRadius: '10px',
                        border: '1px solid rgba(108,99,255,0.3)',
                        color: '#8888AA',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          color: '#6C63FF', borderColor: '#6C63FF',
                          background: 'rgba(108,99,255,0.1)',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      {s.icon}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Avatar side */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  animation: 'fadeInRight 0.8s ease 0.2s both',
                }}
              >
                {/* Rotating ring */}
                <Box
                  sx={{
                    position: 'absolute', inset: -20,
                    borderRadius: '50%',
                    border: '2px dashed rgba(108,99,255,0.3)',
                    animation: 'spin 20s linear infinite',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute', inset: -40,
                    borderRadius: '50%',
                    border: '1px dashed rgba(255,101,132,0.2)',
                    animation: 'spin 30s linear infinite reverse',
                  }}
                />

                <Avatar
                  sx={{
                    width: { xs: 220, md: 300 },
                    height: { xs: 220, md: 300 },
                    background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                    fontSize: { xs: '5rem', md: '7rem' },
                    fontWeight: 900,
                    boxShadow: '0 0 60px rgba(108,99,255,0.4)',
                    animation: 'pulse-glow 3s ease-in-out infinite',
                    border: '4px solid rgba(108,99,255,0.3)',
                  }}
                >
                  A
                </Avatar>

                {/* Floating badges */}
                {[
                  { label: 'React', top: '5%',  right: '-10%', delay: '0s' },
                  { label: 'Node',  bottom: '15%', left: '-12%', delay: '0.5s' },
                  { label: 'MUI',   top: '55%',  right: '-14%', delay: '1s' },
                ].map((b) => (
                  <Box
                    key={b.label}
                    sx={{
                      position: 'absolute',
                      top: b.top, bottom: b.bottom,
                      left: b.left, right: b.right,
                      background: '#13131A',
                      border: '1px solid rgba(108,99,255,0.3)',
                      borderRadius: '10px',
                      px: 1.5, py: 0.8,
                      fontSize: '0.78rem', fontWeight: 700,
                      color: '#6C63FF',
                      animation: `float 4s ease-in-out ${b.delay} infinite`,
                      whiteSpace: 'nowrap',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    {b.label}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute', bottom: 32, left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
            animation: 'fadeInUp 1s ease 1s both',
          }}
        >
          <Typography variant="caption" color="text.secondary">Scroll down</Typography>
          <Box
            sx={{
              width: 24, height: 40, borderRadius: '12px',
              border: '2px solid rgba(108,99,255,0.4)',
              display: 'flex', justifyContent: 'center', pt: 1,
            }}
          >
            <Box
              sx={{
                width: 4, height: 8, borderRadius: '2px',
                background: '#6C63FF',
                animation: 'float 1.5s ease-in-out infinite',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Box sx={{ py: 8, background: 'rgba(108,99,255,0.04)', borderTop: '1px solid rgba(108,99,255,0.1)', borderBottom: '1px solid rgba(108,99,255,0.1)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((s, i) => (
              <Grid item xs={6} md={3} key={s.label}>
                <Box
                  sx={{
                    textAlign: 'center',
                    animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 900, fontSize: { xs: '2rem', md: '2.8rem' },
                      background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: 'center',
              p: { xs: 4, md: 8 },
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.1), rgba(255,101,132,0.05))',
              border: '1px solid rgba(108,99,255,0.2)',
              animation: 'fadeInUp 0.7s ease both',
            }}
          >
            <Typography variant="h3" fontWeight={800} sx={{ mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Let's Build Something{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#6C63FF,#FF6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Amazing
              </Box>
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem' }}>
              Have a project in mind? I'd love to hear about it.
            </Typography>
            <Button
              component={NavLink}
              to="/contact"
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ fontSize: '1rem' }}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

import React from 'react'
import {
  Box, Container, Typography, Grid, Avatar,
  LinearProgress, Chip, Button
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { NavLink } from 'react-router-dom'

const experiences = [
  // {
  //   role: 'Senior Full Stack Developer',
  //   company: 'TechCorp Inc.',
  //   period: '2022 – Present',
  //   desc: 'Led development of scalable React applications serving 100k+ users. Architected microservices with Node.js and AWS.',
  //   tags: ['React', 'Node.js', 'AWS', 'TypeScript'],
  // },
  {
    role: 'Frontend Developer',
    company: 'Code - Alpha',
    period: '2026 MAY - Present',
    desc: 'Built responsive UIs with React and Material UI. Improved performance by 40% through code splitting and lazy loading.',
    tags: ['React', 'MUI', 'Redux', 'GraphQL'],
  },
  {
    role: 'Full Stack Developer',
    company: 'SMIT',
    period: '2024 – 2025',
    desc: 'Developed client websites and e-commerce solutions. Collaborated with designers to implement pixel-perfect UIs.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

const education = [
  {
    degree: 'B.Sc. Software Engineering',
    school: 'SZABIST',
    period: '2024 - Present',
    desc: 'Graduation in process with honors. Specializing in Software Engineering and Web Technologies.',
  },
]

const softSkills = ['Problem Solving', 'Team Leadership', 'Communication', 'Agile/Scrum', 'Mentoring', 'Time Management']

export default function About() {
  return (
    <Box sx={{ pt: 12, pb: 10 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10, animation: 'fadeInUp 0.7s ease both' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3 }}>
            WHO I AM
          </Typography>
          <Typography variant="h2" fontWeight={800} sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            About{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg,#6C63FF,#FF6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Me
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', fontSize: '1.05rem' }}>
            A passionate developer with a love for clean code and beautiful interfaces.
          </Typography>
        </Box>

        {/* Bio section */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', animation: 'fadeInLeft 0.7s ease both' }}>
            <Box sx={{ position: 'relative' }}>
              <Avatar
                sx={{
                  width: { xs: 240, md: 320 },
                  height: { xs: 240, md: 320 },
                  background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                  fontSize: '6rem', fontWeight: 900,
                  boxShadow: '0 0 60px rgba(108,99,255,0.3)',
                  border: '4px solid rgba(108,99,255,0.2)',
                }}
              >
                A
              </Avatar>
              {/* Experience badge */}
              <Box
                sx={{
                  position: 'absolute', bottom: 10, right: -20,
                  background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                  borderRadius: '14px', p: 2, textAlign: 'center',
                  boxShadow: '0 8px 30px rgba(108,99,255,0.4)',
                  animation: 'float 4s ease-in-out infinite',
                }}
              >
                <Typography variant="h4" fontWeight={900} color="white">3+</Typography>
                <Typography variant="caption" color="rgba(255,255,255,0.85)" fontWeight={600}>
                  Years Exp.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7} sx={{ animation: 'fadeInRight 0.7s ease 0.2s both' }}>
            <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 2 }}>
              MY STORY
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mt: 1, mb: 3 }}>
              Turning ideas into reality
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              I'm Abdullah, a Full Stack Developer based in the digital world. With over 3 years of experience,
              I specialize in building modern web applications that are fast, accessible, and visually stunning.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              My journey started with a curiosity about how websites work, which led me to dive deep into
              React, Node.js, and cloud technologies. I love the intersection of design and engineering.
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.9 }}>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or sharing knowledge with the developer community.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={NavLink}
                to="/contact"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
              >
                Hire Me
              </Button>
              <Button
                component="a"
                href="/resume.pdf"
                download
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{
                  borderColor: 'rgba(108,99,255,0.4)', color: '#E8E8F0',
                  '&:hover': { borderColor: '#6C63FF', background: 'rgba(108,99,255,0.08)' },
                }}
              >
                Download CV
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Experience */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3, display: 'block', textAlign: 'center', mb: 1 }}>
            CAREER
          </Typography>
          <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 8, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Work Experience
          </Typography>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute', left: { xs: 16, md: '50%' },
                top: 0, bottom: 0, width: 2,
                background: 'linear-gradient(to bottom, #6C63FF, #FF6584)',
                transform: { md: 'translateX(-50%)' },
                opacity: 0.3,
              }}
            />

            {experiences.map((exp, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: { md: i % 2 === 0 ? 'flex-start' : 'flex-end' },
                  mb: 6,
                  pl: { xs: 6, md: 0 },
                  animation: `fadeInUp 0.6s ease ${i * 0.15}s both`,
                }}
              >
                {/* Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 10, md: 'calc(50% - 8px)' },
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'linear-gradient(135deg,#6C63FF,#FF6584)',
                    border: '3px solid #0A0A0F',
                    mt: 2,
                    boxShadow: '0 0 12px rgba(108,99,255,0.5)',
                  }}
                />

                <Box
                  sx={{
                    width: { xs: '100%', md: '45%' },
                    background: '#13131A',
                    border: '1px solid rgba(108,99,255,0.2)',
                    borderRadius: '16px',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#6C63FF',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 40px rgba(108,99,255,0.15)',
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 1 }}>
                    {exp.period}
                  </Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5, mb: 0.5 }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FF6584', fontWeight: 600, mb: 1.5 }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                    {exp.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {exp.tags.map(t => (
                      <Chip
                        key={t} label={t} size="small"
                        sx={{
                          background: 'rgba(108,99,255,0.12)',
                          color: '#6C63FF',
                          border: '1px solid rgba(108,99,255,0.25)',
                          fontSize: '0.72rem', fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Education */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3, display: 'block', textAlign: 'center', mb: 1 }}>
            EDUCATION
          </Typography>
          <Typography variant="h3" fontWeight={800} textAlign="center" sx={{ mb: 6, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Academic Background
          </Typography>
          {education.map((e, i) => (
            <Box
              key={i}
              sx={{
                maxWidth: 700, mx: 'auto',
                background: '#13131A',
                border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: '16px', p: 4,
                animation: 'fadeInUp 0.6s ease both',
                '&:hover': { borderColor: '#6C63FF', boxShadow: '0 16px 40px rgba(108,99,255,0.15)' },
                transition: 'all 0.3s ease',
              }}
            >
              <Typography variant="caption" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 1 }}>
                {e.period}
              </Typography>
              <Typography variant="h5" fontWeight={700} sx={{ mt: 0.5, mb: 0.5 }}>{e.degree}</Typography>
              <Typography variant="body1" sx={{ color: '#FF6584', fontWeight: 600, mb: 1.5 }}>{e.school}</Typography>
              <Typography variant="body2" color="text.secondary">{e.desc}</Typography>
            </Box>
          ))}
        </Box>

        {/* Soft Skills */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}>
            SOFT SKILLS
          </Typography>
          <Typography variant="h3" fontWeight={800} sx={{ mb: 6, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            What I Bring
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {softSkills.map((s, i) => (
              <Chip
                key={s}
                label={s}
                sx={{
                  background: 'rgba(108,99,255,0.1)',
                  color: '#E8E8F0',
                  border: '1px solid rgba(108,99,255,0.25)',
                  fontWeight: 600, fontSize: '0.9rem',
                  px: 1, py: 2.5,
                  animation: `scaleIn 0.4s ease ${i * 0.08}s both`,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: 'rgba(108,99,255,0.2)',
                    borderColor: '#6C63FF',
                    transform: 'translateY(-3px)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

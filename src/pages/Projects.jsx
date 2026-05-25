import React, { useState } from 'react'
import {
  Box, Container, Typography, Grid, Chip, Button,
  IconButton, Tooltip
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Swal from 'sweetalert2'

const categories = ['All', 'React', 'Full Stack', 'UI/UX', 'Mobile']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    desc: 'A full-featured e-commerce platform with cart, payments, and admin dashboard. Built with React, Tailwind and Supabase.',
    tags: ['React', 'Tailwind', 'Supabase'],
    category: 'Full Stack',
    color: '#6C63FF',
    emoji: '🛒',
    github: 'https://github.com/abdullah43123/Project_hot_oven_by_c',
    live: 'https://project-hot-oven-by-c-muf7.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Clinic Management System - DOCEASE',
    desc: 'Insert and Track Patients with real-time collaboration, notifications, and team workspaces.',
    tags: ['React', 'Socket.io', 'Redux', 'MUI'],
    category: 'React',
    color: '#FF6584',
    emoji: '✅',
    github: 'https://github.com/abdullah43123/DOCTORS-APP-FRONTEND',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Chat Interface',
    desc: 'Modern chat UI for AI assistants with streaming responses, markdown rendering, and conversation history.',
    tags: ['React', 'GrokAI', 'LocalStorage', 'MUI'],
    category: 'React',
    color: '#43E97B',
    emoji: '🤖',
    github: 'https://github.com/abdullah43123/ai-chatbot-frontend',
    live: 'https://abd6-ai.vercel.app/login',
    featured: false,
  },
  {
    id: 4,
    title: 'Recipe Share System',
    desc: 'A comprehensive component library with 50+ components, and full accessibility support.',
    tags: ['React', 'Supabase', 'Tailwind', 'SweetAlert'],
    category: 'UI/UX',
    color: '#F7971E',
    emoji: '🍽️',
    github: 'https://github.com/abdullah43123/RECIPE-SHARE',
    live: 'https://recipe-share-ckw1.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Finance Dashboard',
    desc: 'Real-time financial analytics dashboard with charts, portfolio tracking, and market data integration.',
    tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    color: '#4FACFE',
    emoji: '📊',
    github: 'https://github.com/abdullah43123/EXPENSE-TRACKER',
    live: 'https://expense-tracker-smoky-nu.vercel.app/',
    featured: true,
  },
  // {
  //   id: 6,
  //   title: 'Fitness Tracker',
  //   desc: 'Cross-platform mobile app for workout tracking, nutrition logging, and progress visualization.',
  //   tags: ['React Native', 'Expo', 'Firebase', 'Charts'],
  //   category: 'Mobile',
  //   color: '#FA709A',
  //   emoji: '💪',
  //   github: 'https://github.com',
  //   live: 'https://example.com',
  //   featured: false,
  // },
]

function ProjectCard({ project, index }) {
  const handleDetails = () => {
    Swal.fire({
      title: `<span style="color:#6C63FF">${project.emoji} ${project.title}</span>`,
      html: `
        <p style="color:#8888AA;line-height:1.8;margin-bottom:16px">${project.desc}</p>
        <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
          ${project.tags.map(t => `<span style="background:rgba(108,99,255,0.15);color:#6C63FF;border:1px solid rgba(108,99,255,0.3);padding:4px 12px;border-radius:6px;font-size:0.8rem;font-weight:600">${t}</span>`).join('')}
        </div>
      `,
      background: '#13131A',
      color: '#E8E8F0',
      confirmButtonText: 'View Live →',
      showCancelButton: true,
      cancelButtonText: 'Close',
      confirmButtonColor: '#6C63FF',
      cancelButtonColor: '#333',
      customClass: {
        popup: 'swal-custom-popup',
      },
    }).then(result => {
      if (result.isConfirmed) window.open(project.live, '_blank')
    })
  }

  return (
    <Box
      sx={{
        background: '#13131A',
        border: '1px solid rgba(108,99,255,0.15)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: project.color,
          boxShadow: `0 24px 60px ${project.color}25`,
        },
      }}
    >
      {/* Card header */}
      <Box
        sx={{
          height: 160,
          background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderBottom: `1px solid ${project.color}20`,
        }}
      >
        <Typography sx={{ fontSize: '4rem', animation: 'float 4s ease-in-out infinite' }}>
          {project.emoji}
        </Typography>
        {project.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{
              position: 'absolute', top: 12, right: 12,
              background: `${project.color}25`,
              color: project.color,
              border: `1px solid ${project.color}50`,
              fontWeight: 700, fontSize: '0.7rem',
            }}
          />
        )}
      </Box>

      {/* Card body */}
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7, flexGrow: 1 }}>
          {project.desc}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap', mb: 3 }}>
          {project.tags.map(t => (
            <Chip
              key={t} label={t} size="small"
              sx={{
                background: 'rgba(255,255,255,0.04)',
                color: '#8888AA',
                border: '1px solid rgba(255,255,255,0.08)',
                fontSize: '0.72rem',
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Button
            onClick={handleDetails}
            variant="contained"
            size="small"
            sx={{
              background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
              '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 8px 20px ${project.color}40` },
              transition: 'all 0.25s ease',
            }}
          >
            View Details
          </Button>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Tooltip title="GitHub">
              <IconButton
                component="a" href={project.github} target="_blank" size="small"
                sx={{ color: '#8888AA', '&:hover': { color: '#E8E8F0' } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Live Demo">
              <IconButton
                component="a" href={project.live} target="_blank" size="small"
                sx={{ color: '#8888AA', '&:hover': { color: project.color } }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <Box sx={{ pt: 12, pb: 10 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8, animation: 'fadeInUp 0.7s ease both' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3 }}>
            MY WORK
          </Typography>
          <Typography variant="h2" fontWeight={800} sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Featured{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg,#6C63FF,#FF6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Projects
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', fontSize: '1.05rem' }}>
            A selection of projects I've built — from full-stack apps to UI libraries.
          </Typography>
        </Box>

        {/* Filter tabs */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center', mb: 8 }}>
          {categories.map(cat => (
            <Button
              key={cat}
              onClick={() => setActive(cat)}
              variant={active === cat ? 'contained' : 'outlined'}
              size="small"
              sx={
                active === cat
                  ? { background: 'linear-gradient(135deg,#6C63FF,#FF6584)', fontWeight: 700 }
                  : {
                      borderColor: 'rgba(108,99,255,0.3)', color: '#8888AA',
                      '&:hover': { borderColor: '#6C63FF', color: '#6C63FF', background: 'rgba(108,99,255,0.06)' },
                    }
              }
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Grid */}
        <Grid container spacing={3}>
          {filtered.map((project, i) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <ProjectCard project={project} index={i} />
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="text.secondary">No projects in this category yet.</Typography>
          </Box>
        )}

      </Container>
    </Box>
  )
}

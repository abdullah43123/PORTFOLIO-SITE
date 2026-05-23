import React, { useState, useEffect, useRef } from 'react'
import {
  Box, Container, Typography, Grid, LinearProgress, Chip
} from '@mui/material'

const skillCategories = [
  {
    title: 'Frontend',
    emoji: '🎨',
    color: '#6C63FF',
    skills: [
      { name: 'React.js',     level: 95 },
      { name: 'TypeScript',   level: 88 },
      { name: 'Material UI',  level: 92 },
      { name: 'Next.js',      level: 82 },
      { name: 'CSS/SCSS',     level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    emoji: '⚙️',
    color: '#FF6584',
    skills: [
      { name: 'Node.js',    level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs',  level: 92 },
      { name: 'GraphQL',    level: 75 },
      { name: 'Python',     level: 70 },
      { name: 'PHP',        level: 65 },
    ],
  },
  {
    title: 'Database',
    emoji: '🗄️',
    color: '#43E97B',
    skills: [
      { name: 'MongoDB',    level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL',      level: 78 },
      { name: 'Redis',      level: 70 },
      { name: 'Firebase',   level: 82 },
      { name: 'Supabase',   level: 72 },
    ],
  },
  {
    title: 'DevOps & Tools',
    emoji: '🚀',
    color: '#F7971E',
    skills: [
      { name: 'Git/GitHub', level: 92 },
      { name: 'Docker',     level: 75 },
      { name: 'AWS',        level: 70 },
      { name: 'CI/CD',      level: 72 },
      { name: 'Linux',      level: 78 },
      { name: 'Vite',       level: 90 },
    ],
  },
]

const techStack = [
  'React', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL',
  'Docker', 'AWS', 'GraphQL', 'Redis', 'Next.js',
  'Tailwind', 'MUI', 'Git', 'Figma', 'Vite',
  'Express', 'Firebase', 'Supabase', 'Python', 'Linux',
]

function AnimatedBar({ level, color, visible }) {
  return (
    <Box sx={{ position: 'relative', height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          borderRadius: 4,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          width: visible ? `${level}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 10px ${color}60`,
        }}
      />
    </Box>
  )
}

function SkillCard({ category, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        background: '#13131A',
        border: `1px solid ${category.color}25`,
        borderRadius: '20px',
        p: 4,
        height: '100%',
        transition: 'all 0.35s ease',
        animation: `fadeInUp 0.6s ease ${index * 0.15}s both`,
        '&:hover': {
          borderColor: category.color,
          transform: 'translateY(-6px)',
          boxShadow: `0 20px 50px ${category.color}20`,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Box
          sx={{
            width: 52, height: 52, borderRadius: '14px',
            background: `${category.color}18`,
            border: `1px solid ${category.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem',
          }}
        >
          {category.emoji}
        </Box>
        <Typography variant="h6" fontWeight={700}>{category.title}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {category.skills.map((skill) => (
          <Box key={skill.name}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" fontWeight={600} color="text.primary">
                {skill.name}
              </Typography>
              <Typography variant="body2" fontWeight={700} sx={{ color: category.color }}>
                {skill.level}%
              </Typography>
            </Box>
            <AnimatedBar level={skill.level} color={category.color} visible={visible} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function Skills() {
  return (
    <Box sx={{ pt: 12, pb: 10 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10, animation: 'fadeInUp 0.7s ease both' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3 }}>
            EXPERTISE
          </Typography>
          <Typography variant="h2" fontWeight={800} sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            My{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg,#6C63FF,#FF6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Skills
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', fontSize: '1.05rem' }}>
            Technologies and tools I use to bring ideas to life.
          </Typography>
        </Box>

        {/* Skill cards */}
        <Grid container spacing={3} sx={{ mb: 12 }}>
          {skillCategories.map((cat, i) => (
            <Grid item xs={12} sm={6} key={cat.title}>
              <SkillCard category={cat} index={i} />
            </Grid>
          ))}
        </Grid>

        {/* Tech cloud */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}>
            TECH STACK
          </Typography>
          <Typography variant="h3" fontWeight={800} sx={{ mb: 6, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Tools I Work With
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
            {techStack.map((tech, i) => (
              <Chip
                key={tech}
                label={tech}
                sx={{
                  background: 'rgba(108,99,255,0.08)',
                  color: '#E8E8F0',
                  border: '1px solid rgba(108,99,255,0.2)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  px: 0.5, py: 2.5,
                  animation: `scaleIn 0.4s ease ${i * 0.05}s both`,
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  '&:hover': {
                    background: 'rgba(108,99,255,0.18)',
                    borderColor: '#6C63FF',
                    color: '#6C63FF',
                    transform: 'translateY(-3px) scale(1.05)',
                    boxShadow: '0 8px 20px rgba(108,99,255,0.2)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Currently learning */}
        <Box
          sx={{
            mt: 12, p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(255,101,132,0.04))',
            border: '1px solid rgba(108,99,255,0.2)',
            borderRadius: '24px',
            textAlign: 'center',
            animation: 'fadeInUp 0.7s ease both',
          }}
        >
          <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
            Currently Learning 📚
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4, fontSize: '1.05rem' }}>
            Always expanding my skill set with the latest technologies.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Rust', 'Web3', 'Three.js', 'AI/ML', 'Kubernetes'].map((t, i) => (
              <Chip
                key={t}
                label={`🔥 ${t}`}
                sx={{
                  background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,101,132,0.1))',
                  color: '#E8E8F0',
                  border: '1px solid rgba(108,99,255,0.3)',
                  fontWeight: 700, fontSize: '0.9rem',
                  px: 1, py: 2.5,
                  animation: `scaleIn 0.4s ease ${i * 0.1}s both`,
                }}
              />
            ))}
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

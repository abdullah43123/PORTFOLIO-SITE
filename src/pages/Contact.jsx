import React, { useState } from 'react'
import {
  Box, Container, Typography, Grid, TextField,
  Button, CircularProgress
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  subject: yup
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be at most 100 characters')
    .required('Subject is required'),
  message: yup
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message must be at most 1000 characters')
    .required('Message is required'),
})

const contactInfo = [
  { icon: <EmailIcon />,    label: 'Email',    value: 'hello@abdullah.dev',  color: '#6C63FF' },
  { icon: <PhoneIcon />,    label: 'Phone',    value: '+1 (555) 000-0000',   color: '#FF6584' },
  { icon: <LocationOnIcon />, label: 'Location', value: 'Remote — Worldwide', color: '#43E97B' },
]

const socials = [
  { icon: <GitHubIcon />,   href: 'https://github.com',   label: 'GitHub',   color: '#E8E8F0' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: <TwitterIcon />,  href: 'https://twitter.com',  label: 'Twitter',  color: '#1DA1F2' },
]

export default function Contact() {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (data) => {
    setLoading(true)
    toast.loading('Sending your message...', { id: 'send' })

    // Simulate API call
    await new Promise(r => setTimeout(r, 2000))

    setLoading(false)
    toast.dismiss('send')

    Swal.fire({
      title: '<span style="color:#6C63FF">Message Sent! 🎉</span>',
      html: `
        <p style="color:#8888AA;line-height:1.8">
          Thanks <strong style="color:#E8E8F0">${data.name}</strong>! I've received your message and will get back to you at
          <strong style="color:#6C63FF"> ${data.email}</strong> within 24 hours.
        </p>
      `,
      background: '#13131A',
      color: '#E8E8F0',
      confirmButtonText: 'Awesome!',
      confirmButtonColor: '#6C63FF',
      icon: 'success',
      iconColor: '#6C63FF',
    })

    reset()
  }

  return (
    <Box sx={{ pt: 12, pb: 10 }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10, animation: 'fadeInUp 0.7s ease both' }}>
          <Typography variant="overline" sx={{ color: '#6C63FF', fontWeight: 700, letterSpacing: 3 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h2" fontWeight={800} sx={{ mt: 1, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            Let's{' '}
            <Box component="span" sx={{ background: 'linear-gradient(135deg,#6C63FF,#FF6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Connect
            </Box>
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 520, mx: 'auto', fontSize: '1.05rem' }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Left — Info */}
          <Grid item xs={12} md={5} sx={{ animation: 'fadeInLeft 0.7s ease both' }}>
            <Box sx={{ mb: 5 }}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
                Let's talk about your project
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                I'm currently available for freelance work and full-time positions.
                Whether you have a question, a project idea, or just want to connect — feel free to reach out!
              </Typography>
            </Box>

            {/* Contact info cards */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
              {contactInfo.map((info) => (
                <Box
                  key={info.label}
                  sx={{
                    display: 'flex', alignItems: 'center', gap: 2,
                    p: 2.5, borderRadius: '14px',
                    background: '#13131A',
                    border: '1px solid rgba(108,99,255,0.15)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: info.color,
                      transform: 'translateX(6px)',
                      boxShadow: `0 8px 24px ${info.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: '12px',
                      background: `${info.color}18`,
                      border: `1px solid ${info.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: info.color, flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: 'block' }}>
                      {info.label}
                    </Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Socials */}
            <Box>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
                Find me on
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {socials.map((s) => (
                  <Box
                    key={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: 46, height: 46, borderRadius: '12px',
                      background: '#13131A',
                      border: '1px solid rgba(108,99,255,0.2)',
                      color: '#8888AA',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        color: s.color,
                        borderColor: s.color,
                        background: `${s.color}12`,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 20px ${s.color}30`,
                      },
                    }}
                  >
                    {s.icon}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right — Form */}
          <Grid item xs={12} md={7} sx={{ animation: 'fadeInRight 0.7s ease 0.2s both' }}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                background: '#13131A',
                border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: '24px',
                p: { xs: 3, md: 5 },
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ mb: 4 }}>
                Send a Message
              </Typography>

              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    placeholder="John Doe"
                    {...register('name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    {...register('email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    placeholder="Project Inquiry"
                    {...register('subject')}
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    placeholder="Tell me about your project..."
                    multiline
                    rows={5}
                    {...register('message')}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    sx={{ py: 1.6, fontSize: '1rem', mt: 1 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

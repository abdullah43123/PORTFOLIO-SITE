import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import theme from './theme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <div className="noise">
          <Navbar />
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills"   element={<Skills />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="*"         element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#13131A',
              color: '#E8E8F0',
              border: '1px solid rgba(108,99,255,0.3)',
              borderRadius: '10px',
              fontFamily: 'Inter, sans-serif',
            },
            success: { iconTheme: { primary: '#6C63FF', secondary: '#fff' } },
            error:   { iconTheme: { primary: '#FF6584', secondary: '#fff' } },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

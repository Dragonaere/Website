import Link from 'next/link'
import { Box } from '@mui/system';
import 'animate.css'

export default function Home() {
  return (
    <main>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="90vh">
        <Box display="flex" flexDirection="row">
          <h1 className='title animate__animated animate__backInDown'>
            Andrew
          </h1>
          <h1 className='title orange animate__animated animate__delay-1s animate__fadeInRight'>
            Dragon
          </h1>
        </Box>
        <Box display="flex" flexDirection="column" className='mainbody animate__animated animate__delay-2s animate__fadeInUp'>
          <h2 className='subtitle animate__animated animate__fadeInUp animate__delay-2s'>
            YouTube Streamer and Content Creator
          </h2>
          <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridTemplateRows="1fr" justifyContent="center" alignItems="center">
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/links">
                My Socials
              </Link>
            </p>
            <p className='links animate__animated animate__zoomIn animate__delay-2s'>
              <Link href="/about">
                About Me
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
    </main>
  )
}

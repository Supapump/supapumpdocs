// theme.config.tsx
import React from 'react'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/router'

const config = {
  logo: <span style={{ color: '#4ADE80' }}>Supa Pump Docs</span>,
  docsRepositoryBase: 'https://github.com/Supapump/supapumpdocs',
  primaryHue: 142, // Green hue
  darkMode: true,
  defaultTheme: 'dark',
  sidebar: {
    //defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://t.me/supapumpbot" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle',
            color: '#4ADE80'
          }}
        >
          <FaTelegramPlane size={24} />
        </a>
        <a 
          href="https://x.com/supapumpbot" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            verticalAlign: 'middle',
            color: '#4ADE80'
          }}
        >
          <FaTwitter size={24} />
        </a>
      </>
    )
  },
  footer: {
    content: <span style={{ color: '#4ADE80' }}>Supa Pump Docs</span>
  },
  // Setting navigation to false to disable any default navigation items
  navigation: false,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Supa Pump Docs'
    }
  }
}

export default config
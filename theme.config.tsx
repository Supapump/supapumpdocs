// theme.config.tsx
import React from 'react'
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const config = {
  logo: <span>Supa Pump Docs</span>,
  docsRepositoryBase: 'https://github.com/metasal1/supapumpdocs',
  darkMode: true,
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
            verticalAlign: 'middle'
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
            verticalAlign: 'middle'
          }}
        >
          <FaTwitter size={24} />
        </a>
      </>
    )
  },
  footer: {
    content: 'Supa Pump Docs'
  },
  // Setting navigation to false to disable any default navigation items
  navigation: false
}

export default config
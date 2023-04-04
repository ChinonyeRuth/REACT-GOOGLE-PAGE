import React from 'react'
import BottomLeft from './BottomLeft'

import BottomRight from './BottomRight'
import FooterText from './FooterText'
import Location from './Location'

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <BottomLeft />
        <BottomRight />
        <FooterText />
        <Location />
      </footer>
    </div>
  )
}

export default Footer

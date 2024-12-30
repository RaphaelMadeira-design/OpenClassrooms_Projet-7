import React from 'react'
import '../Css/style.css'

function Wrapper({children}) {
  return (
    <div className='wrapper'>{...children}</div>
  )
}

export default Wrapper
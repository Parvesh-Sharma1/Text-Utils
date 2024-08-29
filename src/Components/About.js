import React from 'react'

export default function About(props) {
  return (
    <div>
      <p className={`text-${props.mode==="dark"?"light":"dark"}`}>copyright &copy; parvesh.98963.sharma@gmail.com</p>
    </div>
  )
}

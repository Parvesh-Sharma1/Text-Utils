import React from 'react'

export default function Contact(props) {
  return (
    <div className={`text-${props.mode==="dark"?"light":"dark"}`}>
     " Contact us" is under process
    </div>
  )
}

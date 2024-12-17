import React from 'react'
import { CONTACT } from '../constants'

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get In Touch</h1>
        <div className='text-center tracking-tighter'>
            {/* <p className='my-4'>{CONTACT.address}</p> */}
            <p className='my-4 text-2xl'>{CONTACT.phoneNo}</p>
            <a className='my-4 text-2xl underline ' href='#'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
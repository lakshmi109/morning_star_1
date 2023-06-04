import React from 'react'
import Founders from './Founders'
import Form from './Form'
import './contact.css'
import Whatwedo from './Whatwedo'
import Investors from './Investors'

const Contactuspage = () => {
  return (
    <div className='contactuspage'>
        <Form/>
        <Founders/>
        <Whatwedo/>
        <Investors/>
    </div>
  )
}

export default Contactuspage;

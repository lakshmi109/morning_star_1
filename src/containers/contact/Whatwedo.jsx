import React from 'react'
import './whatwedo.css'

const Whatwedo = () => {
  return (
    <>
        <div className='whatwedocontainer'>
           
            <div className='whatwedoinfo'>
                <h2>What We Do ?</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eligendi repellat quae. Non dolor aut harum id quas, reprehenderit rem tenetur accusantium laudantium ducimus eos omnis, laborum tempore, officia placeat.</p>
            </div>

            <div className='whatwedoimagebox'>
                    <img className='whatwedoimage' src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Whatwedo;
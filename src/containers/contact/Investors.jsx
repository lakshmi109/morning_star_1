import React from 'react'
import './investors.css'

const Investors = () => {
  return (
    <>
        <div className='investorscontainer'>
            <div className='investorsgreenbox'></div>
            <div className='investorsimagebox'>
                    <img className='investorsimage' src="https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fpitching-investors_2021-08-16-223955_uvni.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.0825&fp-y=0.2205&h=415&q=88&w=622&s=2414200334f375415b91eb011897387d" alt="" />
            </div>
            <div className='investorsinfo'>
                <h2>Investors</h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eligendi repellat quae. Non dolor aut harum id quas, reprehenderit rem tenetur accusantium laudantium ducimus eos omnis, laborum tempore, officia placeat.</p>
            </div>
        </div>
    </>
  )
}

export default Investors;
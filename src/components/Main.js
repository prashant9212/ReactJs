import React from 'react'
import LoginApp from './LoginApp';
import HomeSlider from './HomeSlider';



export default function Main() {
  return (
   <>
    <HomeSlider/>
    <div className='container'>     
      <LoginApp/>  
    </div>
   </>
    
  )
}

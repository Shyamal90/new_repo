import React from 'react'

function Banner_Cart({image_url,catagory_type,catogory_text}) {
  return (
    <>
       <div className="banner_catagory_container">
           <img src={image_url} alt="" />
           <div className="banner_text">
               <h1>{catagory_type}</h1>
               <p>{catogory_text}</p>
           </div>
       </div>
    </>
  )
}

export default Banner_Cart
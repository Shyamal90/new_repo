import React from 'react'
import Banner_Cart from '../Banner_Cart/Banner_Cart'
import "./Banner.css"

function Banner() {
  return (
    <>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
       <div className="banner_main_container">
           <div className="banner_left_container">
               <img src="./images/left-banner-image.jpg" alt="" />
               <div className="background_text">
                   <h1>We Are Hesashop</h1>
                   <p>Awesome,clean & creative HTML5 Template</p>
               </div>
           </div>
           <div className="banner_right_container">
               <div className="banner_categories">
                   <Banner_Cart image_url={"./images/baner-right-image-01.jpg"} catagory_type={"Women"} catogory_text="Best Clothes For Women"/>

                   <Banner_Cart image_url={"./images/baner-right-image-01.jpg"} catagory_type={"Women"} catogory_text="Best Clothes For Women"/>

                   <Banner_Cart image_url={"./images/baner-right-image-01.jpg"} catagory_type={"Women"} catogory_text="Best Clothes For Women"/>

                   <Banner_Cart image_url={"./images/baner-right-image-01.jpg"} catagory_type={"Women"} catogory_text="Best Clothes For Women"/>
               </div>
           </div>
       </div>
    {/* <!-- ***** Main Banner Area End ***** --> */}
    </>
  )
}

export default Banner
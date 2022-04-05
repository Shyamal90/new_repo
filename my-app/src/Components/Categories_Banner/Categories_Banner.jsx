import React from 'react'
import "./Categories_Banner.css"

function Categories_Banner({catagroy}) {
  return (
    <>
      <div className="categories_banner_container">
          <div className="categories_heading">
              <h1>{catagroy}'s Latest</h1>
              <p>Details to details is what makes Hexashop differnet from the other themes.</p>
          </div>

          <div className="categories_slidder">
              
          </div>
      </div>
    </>
  )
}

export default Categories_Banner
import React from 'react'
import '../styles/CourseCard.css'
function CourseCard(props) {
  return (
    <div className='card'>
        <div>
          <img className='Item_image' src={props.image} alt={props.name}/>
          <div className='Item_description'>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
          </div>
        </div>
    </div>
  )
}

export default CourseCard
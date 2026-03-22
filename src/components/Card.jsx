import React from 'react'

const Card = (props) => {
  return (
    <div className="card2">
            <img src={props.img} alt="" />
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>view profile</button>
    </div>
  )
}

export default Card
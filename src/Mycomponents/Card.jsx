
import React from 'react'
const Card = (props) => {
  return (
    <>
    <div class="card" style={{width:'18rem',marginLeft:'3rem',marginTop:'3rem'}}>  
  <img src="https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <h5 class="card-title">Age:{props.age}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>

  )
}

export default Card;
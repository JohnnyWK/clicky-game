  
import React from "react";
import "./style.css";



function FriendCard(props) {
  // console.log(props)
  return (
    <div className="card">
      <div className="img-container" onClick={() => {props.click(props.id); props.shuffle()}}>
        <img alt={props.name} src={props.image} />
      </div>
      {/* <span className="remove" >𝘅</span> */}
    </div>
  );
}

export default FriendCard;
import React from "react";
export default  function Content(props){
  return(
    <>
    
  <div className="cards">
    <div className="card" >
  <img src="tv.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. lore</p>
  </div>
</div>

<div className="card" >
  <img src="tv.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card" >
  <img src="tv.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

</div>

    
    </>
  );
}
import React, {useState} from "react";
export default  function Content(props){

  
  let changeColor =  () =>  {
    if(myStyle.color === 'rgba(16, 21, 27, 0.918)'){
        newStyle ( {
          color: 'white',
          backgroundColor: 'rgba(16, 21, 27, 0.918)'
        }) 
    } else {
      newStyle ( {
        color: 'rgba(16, 21, 27, 0.918)',
        backgroundColor: 'white',
        
      })
    }
}
let [myStyle, newStyle] = useState({
  color: 'rgba(16, 21, 27, 0.918)',
  backgroundColor: 'white'
} );


  return(
    <>
     <button onClick={changeColor} className='btn btn-primary'>Change Color</button>
  <div className="Boxs" style={myStyle}>  
 

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
   
</div>
    
    </>
  );
}

import React,  {useState} from 'react'
  
export default function TextForm(props) {

  const toUpperCase = () => {
    setText(toUpperText)
  }

  const toLowerCase = () => {
    setText(toLowerText)
  }

  

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }



  const [text, setText] = useState('');
  let toUpperText = text.toUpperCase();
  let toLowerText = text.toLowerCase();
  



  return (
   <>
   <h1>{props.heading}</h1>
   
<div className="mb-3 my-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id= "myBox"rows="10" placeholder='Enter text here...'></textarea>
  <button className='btn btn-primary my-3 mx-2' onClick={toUpperCase} >Upper Case</button>
  <button className='btn btn-primary my-3 mx-2' onClick={toLowerCase}>Lower Case</button>
 
</div>
   </>
  )   
}

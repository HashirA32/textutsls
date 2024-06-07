
import React,  {useState} from 'react'
  
export default function TextForm(props) {

  const toUpperCase = () => {
    setText(toUpperText)
  }

  const toLowerCase = () => {
    setText(toLowerText)
  }
  const toClearText = () => {
    setText('')
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
    <textarea className="form-control" value={text} onChange={handleOnChange} id= "myBox"rows="10" placeholder='Enter text here...'   ></textarea>
    </div>
    <div className="TextData">

    <div className="buttons">
      <button className='btn btn-outline-warning my-3 mx-1' onClick={toUpperCase} >Upper Case</button>
      <button className='btn btn-outline-warning my-3 mx-1' onClick={toLowerCase}>Lower Case</button>
      <button className='btn btn-outline-warning my-3 mx-1' onClick={toClearText}>Clear Text</button>
    </div>

      <div className="TData">
      <h2>Text Data</h2>
      <p className="mx-5 "> <b> Characters = {text.length} <br /> words = {text.split(' ').length } <br /> Sentence = {text.split('. ').length-1} </b></p>
      </div> 

    </div>
   </>
  )   
}

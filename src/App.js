import { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';
import './App.css';

function App() {
  const [color, setColor] = useState('')
  const [error,setError]=useState(null)
  const [list, setList] = useState(new Values('#f8f8f8').all(10))

  const handleSubmit=e=>{
    e.preventDefault()
    setError(null)
    try {
      let colors=new Values(color).all(10)
      console.log(colors);
      setList(colors)
    } catch (error) {
      setError('Please enter a valid hexadecimal code!')
    }
  }
  return (
    <>
    <section className='container'>
      <h1>Tint Generator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={color}
        onChange={e=>setColor(e.target.value)}
        placeholder='#f8f8f8'
        className={`${error?'error':''}`}/>
        <button className='btn' type="submit">Let's Go</button>
      </form>
      {error && <p>{error}</p>}
      <section className='colors'>
        {list.map((color,i)=>{return (
          <SingleColor 
          key={i}
          {...color}
          hexColor={color.hex}
          />
        )})}
      </section>
    </section>
    </>
  );
}

export default App;

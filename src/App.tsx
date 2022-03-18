import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, TextField } from '@mui/material';

const App = () => {
  const [myItems, setMyItems] = useState(["Lucas","Jana"]);
  const [myItems2, setMyItems2] = useState(["Leah"]);
  const [counter,setCounter] = useState(0); 

  console.log(encodeURIComponent('saint joseph,mi') );
  return (
    <div className="App">
      <Button variant='contained' onClick={() => setCounter(counter+1)}>Count Up</Button>
      <p>{counter}</p>
      <TextAdder onAdd={(text) => setMyItems([...myItems,text])}></TextAdder>
      {myItems.map((item,index) => <p key={index}>{item}</p>)}
      <TextAdder color='cyan' onAdd={(text) => setMyItems2([...myItems2,text])}></TextAdder>
      {myItems2.map((item,index) => <p key={index}>{item}</p>)}
    </div>
  );
}

interface TextAdderProps {
  onAdd: (text: string) => void,
  color?: string
}

const TextAdder = (props:TextAdderProps) => {
const [text,setText] = useState(""); 
return (      
<div>
  <TextField onChange={(e) => setText(e.target.value)}></TextField>
  <Button variant='contained' style={{margin:"10px", color:`${props.color}`}} onClick={() => { 
    props.onAdd(text);
  }
  }>Add Text</Button>
</div>);
}

interface InputWithButtonProps {
  onCommit: (text: string) => void,
  color?: string
}

const InputWithButton : React.FC<InputWithButtonProps> = (props) => {
  const [text,setText] = useState(""); 
  return (      
  <div>
    <TextField onChange={(e) => setText(e.target.value)}></TextField>
    <Button variant='contained' style={{margin:"10px", color:`${props.color}`}} onClick={() => { 
      props.onCommit(text);
    }
    }>{props.children}</Button>
  </div>);
  }

export default App;

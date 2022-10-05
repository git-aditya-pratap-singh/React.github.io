/*import React, {useState} from "react";
import './App.css';

const App = () =>{ 

  const [name, setName] = useState('');

  const [fullName, setFullName] = useState('');

  const inputEvent = (event) =>{ 
    
    setName(event.target.value);
  }

  const onSubmit = (event)=>{ 
    event.preventDefault();
    setFullName(name);
  }
  return(
    <>
    <div>
    <form onSubmit={onSubmit}>
      <h1>Hello {fullName}</h1>
      <input type="text"
        placeholder="Enter Your Name"
        onChange={inputEvent}
        value={name} 
        />
      <button type="submit">Click me😊</button>
    </form>
    </div>

    </>
  );
}

export default App;*/


import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App2 = () =>{

  const [name, setName] = useState('');

  const [pswd, setPwd] = useState('');
  const [fullName, setFullName] = useState('');

  const [fullpswd, fullsetPwd] = useState('');

  const inputName = (event) =>{
      setName(event.target.value);
      setPwd(event.target.value);
  }
 

  const onSubmit2 = (event) =>{
      event.preventDefault();     //Page ko refresh hone se rokta hai
      setFullName(name);
      fullsetPwd(pswd);
  }
  return(
    <>
    <div>
      <form onSubmit={onSubmit2}>
        <h1>Hello {fullName} {fullpswd}</h1>
        <input type="text"
          placeholder="Enter Your Name"
          onChange={inputName}
          value={name}
        />
        <br></br>
        <input type="password"
          placeholder="Enter Your Password"
          onChange={inputName}
          value={pswd}
        />
        <button type="submit">Submit</button>
      </form>
    </div>

    </>
  );
}

export default App2;
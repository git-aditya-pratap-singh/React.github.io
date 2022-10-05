import React, {useState} from 'react';
import './App.css';

const App = () =>{
     
     const [fullName, setFullName] = useState({
          fname: '',
          lname: '',
          email: '',
     });  
     
     const inputEvent = (event) =>{
          console.log(event.target.value);
          console.log(event.target.name);

          const {name, value} = event.target;

          setFullName((preValue)=>{ 
               return{
                    ...preValue,
                    [name]: value,
               };
              // console.log(preValue);

               /*if (name === 'fName'){
                    return{
                         fname: value,
                         lname: preValue.lname,
                         email: preValue.email,
                    };
               }

               else if (name === 'eMail'){
                    return{
                         email: value,
                         fname: preValue.fname,
                         lname: preValue.lname,
                    };
               }
               else if (name === 'lName'){
                    return{
                         fname: preValue.fname,
                         email: preValue.email,
                         lname: value,
                    }; 
               }*/
          });

     }

     const submitEvent = (event) =>{
          event.preventDefault();   // Page ko refresh hone se rokta hai
          alert("form Submitted");
     }
     return(
          <>
          <div>
          <form onSubmit={submitEvent}>
               <h1>Hello {fullName.fname} {fullName.lname} </h1>
               <input type="text"
                    placeholder="Enter Your Name"
                    name='fname'
                    onChange={inputEvent}
                    value={fullName.fname}
               />
               <input type="text"
                    placeholder="Enter Your Last Name"
                    name='lname'
                    onChange={inputEvent}
                    value={fullName.lname}
               />

               <input type="email"
                    placeholder="Enter Your Email"
                    name='email'
                    onChange={inputEvent}
                    value={fullName.email}
               />
               <button type="submit">Click me</button>
          </form>
          </div>

          </>
     );
}

export default App;
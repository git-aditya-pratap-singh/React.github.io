import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

const cssStyle = {};

if (curDate >= 1 && curDate < 12){
    greeting = 'Good Morning';
    cssStyle.color = "green";
}
else if (curDate >= 12 && curDate < 7){
     greeting = 'Good Afternoon';
     cssStyle.color = "orange";
}
else{
     greeting = 'Good Night';
     cssStyle.color = "cyan";
}

ReactDOM.render(
     <>
     <div className="div2">
         <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
     </div>

     </>,
     document.getElementById('root')
);
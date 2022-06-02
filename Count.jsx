// import { useState } from "react";
// const Count=()=>{
//     const[count, setCount] = useState(0);
//     return(
//         <div>
//             <h1>Functional component</h1>
//             <p1>{count}</p1>
//             <button onClick={()=>setCount(count+1)}>Hit Me!</button>
//         </div>
//     )
// }




// export default Count;




// class --------------------

// import React from "react";
// class Example extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             count:0
//         };
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Hit me!</button>
//             </div>
//         );

//     }
// }
// export default Example;


//useeffect-----------------
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [message, setMessage] = useState('Hi there, how are you?');

//   useEffect(() => {
//     console.log('trigger use effect hook');

//     setTimeout(() => {
//       setMessage("I'm fine, thanks for asking.");
//     }, 1000)
//   })

//   return <h1>{message}</h1>
// };

// export default App;




//useMemo-------------

// import React, { useMemo, useRef, useState } from "react";
// const Count = () => {
//   const [count, setCount] = useState(0);
//   const [item, setItem] = useState(10);
//   // function multiCount() {
//       const memo=useMemo(function multiCount(){
//         return count*5;
//       },[count] )                        //   console.log("multiCount");// in this case count to hamara increase hoga pr jb hm item pr click krenge
//                                // to tb bhi hamari state unwantly update hoti hai..isko rokne ke liye use memo use krte hn
//   // return count * 5
//     // }
//   return (
//     <div>
//       <h1>Use memo</h1>
//       <h2>count is:{count}</h2>
//       <h2>item is:{item}</h2>
//       <h2>Multicount is:{memo}</h2>
//       <button onClick={() => setCount(count + 1)}>Count</button>
//       <button onClick={() => setItem(item * 10)}>Item</button>
//     </div>
//   );
// }
// export default Count;



//useRef

import React,{useRef} from 'react'
const Count=()=>{

  const inputRef=useRef(null)
  function handleInput(){
    inputRef.current.value="100";
    inputRef.current.style.color="red";
    inputRef.current.focus();
    inputRef.current.style.display="none";

  }
  return(
    <div>
      <h1>Use Ref</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInput}>handle This!</button>
    </div>
  )
}
export default Count;


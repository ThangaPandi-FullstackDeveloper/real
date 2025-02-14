// import React from 'react';
// import Main from '../Main';






// export default function Nopage() {
//     return(
//         <>
//             <Main/>
//             <h2>Error 404 : Not Found</h2> 
//         </> 

//     )
// }


const functions = [
    () => alert("Hello!"),
    () => alert("Welcome!"),
    () => alert("Goodbye!")
  ];
  
  const MyComponent = () => (
    <div>
      {functions.map((fn, index) => (
        <button key={index} onClick={fn}>
          Button {index + 1}
        </button>
      ))}
    </div>
  );
  
  export default MyComponent;
// // src/myComponents/TextForm.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TextForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // You can add more logic here like form validation or API call
//   };
//   const Converttouppercase=()=>{
//     let newtext=email.toUpperCase();
//     console.log(newtext);
//     setEmail(newtext);
//   }
//   const Convertolowercase=()=>{
//     let newtext=email.toLowerCase();
//     console.log(newtext);
//     setEmail(newtext);
//   }


//   return (
//     <>
//       <div className="form-floating mb-3">
//         <input
//           type="email"
//           className="form-control"
//           id="floatingInput"
//           placeholder="name@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="floatingInput">Email address</label>
//       </div>

//       <div className="form-floating mb-3">
//         <input
//           type="password"
//           className="form-control"
//           id="floatingPassword"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <label htmlFor="floatingPassword">Password</label>
//       </div>

//       <button className="btn btn-primary me-2"   onClick={handleSubmit}>
//         Submit
//       </button>
    
//       <button className="btn btn-primary me-2" onClick={Converttouppercase}>
//         Convert to upper case
//       </button>
//        <button className="btn btn-primary" onClick={Convertolowercase}>
//         Convert to upper case
//       </button>
//     </>
//   );
// };

// export default TextForm;
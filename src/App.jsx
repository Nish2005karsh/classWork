// import './App.css';
// import Navbar from './Mycomponents/Navbar';
// import TextForm from './Mycomponents/TextForm';
// // import { BrowserRouter,Router,Routes } from 'react-router-dom';
// function App() {
//   return (
//     <div>
//       <Navbar searchBar={false} /> {/* Change this to true/false to enable/disable search */}
//       <TextForm />



//     </div>
//   );
// }

// export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Card from './Mycomponents/Card';
import Navbar from './Mycomponents/Navbar'
// import UseState from './Mycomponents/UseState';
// import Counter from './Mycomponents/Counter';
// import Count from './Mycomponents/Count';
// import UseStates from './Mycomponents/useStates';
import Counting from './Mycomponents/Counting';

export default function App () {
  return (  
    <div>
    <Counting />

      
      {/* <Navbar  title="Navbar" aboutText="Home" Link="Link"  />
      <Card  name="Panda" age={20} />
      <Card   name="Pratham" age={96}/>
      <Card name="Hasan"  age={200} /> */}
      
    </div>
  )
}




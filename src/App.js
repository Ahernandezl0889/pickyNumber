import React from 'react';
import './App.css';
// has to declare the NumPicker component
import NumPicker from './components/NumPicker'


export default class App extends React.Component {
  render(){
    return(
      <div className=" App">
        <h1>Hello There !!!!!</h1>
        {/* eslint-disable-next-line */}
        <img src='https://media1.giphy.com/media/Cmr1OMJ2FN0B2/200w.webp?cid=790b7611ae15166b0885d5f686b8502077dbffc47d0104ca&rid=200w.webp '></img>
        <NumPicker />
      </div>
    )
  }
}


// function to declare one component
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello There !!</h1>
//      {/* has to call the Numpicker function */}
//      <NumPicker />
//     </div>
//   );
// }

// export default App;

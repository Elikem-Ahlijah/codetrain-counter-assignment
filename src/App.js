import './App.css';
import {useState, Component} from 'react'

// function App() {
//   const [state, setState] = useState({age:20})
//   const handleClickup = () =>{
//     let newAge = state.age + 1
//     setState({age:newAge});
//   }
//   const handleClickdown = () =>{
//     let newAgedd = state.age - 1
//     setState({age:newAgedd});
//   }
//   return (
//     <div>
//       <h1>Age is{state.age}</h1>
//       <button onClick={handleClickup}>Click me up!!</button>
//       <button onClick={handleClickdown}>Click me down!!</button>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    super()
    this.state = {age:20}
  }

  handleClickup = () =>{
    let newAge = this.state.age + 1;
    this.setState({age:newAge});
  }

  handleClickdown = ()=>{
    let newAgedd = this.state.age - 1
    this.setState({age:newAgedd});
  }


  render(){
    return(
      <div className='App'>
        <h1>Age is{this.state.age}</h1>
        <button onClick={this.handleClickup}>Click me up!!</button>
        <button onClick={this.handleClickdown}>Click me down!!</button>
     </div>
    )
  }
}


export default App;

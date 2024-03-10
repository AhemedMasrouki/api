import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import Userlist from './UserCrad';
import Loading from './Loading';

function App() {
const [listofuser,setlistofuser]=useState(null)

userEffect(  () =>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((el)=> console.log(el.data))
  .catch((err )=> console.log("error",err))
}, [])

  return (
    <div className="App">
      <header className="App-header">
{
  //  listofuser ? <Userlist // = {listofuser}/> : <Loading/>
}
      </header>
    </div>
  );
}

export default App;

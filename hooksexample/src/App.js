import logo from './logo.svg';
import './App.css';
import StateExample from './hookscode/StateExample';
import UserList from './hookscode/UserList';
import UserDetails from './hookscode/UserDetails';
import { useState } from 'react';
import Counter from './hookscode/Counter';
import First from './context/First';

function App() {
  // let [uid, setUid] = useState(1);
  // console.log(UserList(setUid));
  return (
    <div className="App">
      <First />
      {/* <Counter /> */}
      {/* <StateExample />
      <div className='row'>
        <div className='col-md-8'>
           <UserList changeUid={setUid}/>
        </div>
        <div className='col-md-4'>
          <UserDetails uid={uid}/>
        </div>
      </div>
      */}
    </div>
  );
}

export default App;

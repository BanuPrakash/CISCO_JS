import logo from './logo.svg'; // file-loader
import './App.css';
import CustomerList from './components/CustomerList';
import ParentComponent from './dummy/ParentComponent';
import UserList from './lifecycle/UserList';

function App() {
  return <div className="App">
    <UserList />
       {/* <CustomerList />  */}
      {/* <ParentComponent /> */}
    </div>
}

export default App;

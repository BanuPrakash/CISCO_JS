import logo from './logo.svg'; // file-loader
import './App.css';
import CustomerList from './components/CustomerList';
import ParentComponent from './dummy/ParentComponent';

function App() {
  return <div className="App">
       <CustomerList /> 
      {/* <ParentComponent /> */}
    </div>
}

export default App;

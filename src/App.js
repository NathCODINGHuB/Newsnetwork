import HeaderComponent from './Components/HeaderComponent';
import BodyComponent from './Components/BodyComponent'
import GlobalStyle from './Globalstyles';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';



/*
const {Catageroy,onChangeCatageroy,onChangeInput,InputValue,Bringsearchdata,setInputValue}=headerdata
const {searchValue,Catageroy}= BodyData
 */



function App() {
    const [Catageroy, setCatageroy] = useState('General')
    const [InputValue,setInputValue]= useState('')
    const [searchValue,setSearchValue]= useState('')
    const onChangeCatageroy=(cat)=>{
        setCatageroy(cat)

    }
    const onChangeInput=(input)=>{
        setInputValue(input)
    }
    const Bringsearchdata=(x)=>{
        setSearchValue(x)
    }

  return (
   
    <Router>
    <GlobalStyle/>
    <div className="App">
      <header className="App-header">
        <HeaderComponent headerdata={{Catageroy,onChangeCatageroy,onChangeInput,InputValue,Bringsearchdata,setInputValue}}/>
        <Routes>
        <Route path="/Newsnetwork/" element={<BodyComponent BodyData={{searchValue,Catageroy}} />} /> 
        </Routes>
        
      </header>
    </div>

    </Router>
    
   
    
  );
}

export default App;
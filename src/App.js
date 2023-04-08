import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    // showAlert("Toggle Mode!", "success")
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      showAlert("Toggle Mode!", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Toggle Mode!", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <div className="container my-3"> */}
        <Routes>
          <Route exact path="/"
             element={ 
              <TextForm showAlert={showAlert} heading="TextUtils _ word counter , chracter counter and so on..." mode={mode}></TextForm>
             }
          />
         <Route exact path="/about" 
             element={
               <About mode={mode}/> 
             } 
           /> 
         </Routes> 
       </BrowserRouter> 
      {/* </div> */}
    </>
  );
}

export default App;

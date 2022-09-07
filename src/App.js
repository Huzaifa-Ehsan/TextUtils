import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



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
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(15 12 38)"
      showAlert("Dark mode has been enable!", "success")
      document.title = "TextUtils - Dark Mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enable!", "success")
      document.title = "TextUtils - Light Mode"

    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/" */}
            {/* element={ */}
              <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}></TextForm>
            {/* } */}
          {/* /> */}
          {/* <Route exact path="/about" */}
            {/* element={ */}
              {/* <About /> */}
            {/* } */}
          {/* /> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;

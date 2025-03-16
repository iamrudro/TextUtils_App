import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router';

const App = () => {

  const [mode, setmode] = useState('light');         //Weather dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggledarkLightMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }


  return (
    <>
      <NavBar title="TextUtils" mode={mode} darkLightMode={toggledarkLightMode} />
      <Alert alertbar={alert} />

      <Routes>
        <Route exact path='/' element={<TextForm mode={mode} showAlert={showAlert} />}></Route>
        <Route exact path='/about' element={<About mode={mode} />}></Route>
      </Routes>
    </>
  )
}

export default App;
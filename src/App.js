
import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#434040";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
      <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Format your text here" mode={mode} content="Enter here" />} />
          <Route path="/about" element={<About mode={mode} />} />
      </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import News setProgress={setProgress}   Item from './Components/News setProgress={setProgress}   Item';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15;
  // const apiKey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);

  let toggleMode = () => {
    // console.log("running");
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#262a2d';
      // document.body.style.color = 'white';

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <div>
      <Router>
        <Navbar toggleMode={toggleMode} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        {/* <News setProgress={setProgress}    setProgress={setProgress}   Item mode={mode}/> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  key="General" pageSize={pageSize} country="in" mode={mode} category="General" />} />
          <Route exact path="/Business" element={<News setProgress={setProgress}  key="Business" pageSize={pageSize} country="in" mode={mode} category="Business" />} />
          <Route exact path="/Entertainment" element={<News setProgress={setProgress}  key="Entertainment" pageSize={pageSize} country="in" mode={mode} category="Entertainment" />} />
          <Route exact path="/Sports" element={<News setProgress={setProgress}  key="Sports" pageSize={pageSize} country="in" mode={mode} category="Sports" />} />
          <Route exact path="/General" element={<News setProgress={setProgress}  key="General" pageSize={pageSize} country="in" mode={mode} category="General" />} />
          <Route exact path="/Health" element={<News setProgress={setProgress}  key="Health" pageSize={pageSize} country="in" mode={mode} category="Health" />} />
          <Route exact path="/Technology" element={<News setProgress={setProgress}  key="Technology" pageSize={pageSize} country="in" mode={mode} category="Technology" />} />

        </Routes>
      </Router>
    </div>
  )

}

export default App;
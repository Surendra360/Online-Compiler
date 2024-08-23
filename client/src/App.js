// client/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('c');
  const [output, setOutput] = useState('');

  const handleCompile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/compile', {
        language,
        code,
      });
      setOutput(response.data);
    } catch (error) {
      setOutput(error.response.data);
    }
  };

  return (
    <div>
      <h1>Online Compiler</h1>
      <textarea
        rows="10"
        cols="50"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      ></textarea>
      <br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="py">Python</option>
        <option value="js">JavaScript</option>
      </select>
      <br />
      <button onClick={handleCompile}>Compile & Run</button>
      <pre>{output}</pre>
    </div>
  );
}

export default App;

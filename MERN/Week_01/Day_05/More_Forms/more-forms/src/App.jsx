import { useState } from 'react'
import './App.css'

import Form from './components/Form';

function App() {

  // We destructure useState function into "state" and "setState" variables using destructuring notation for dictionaries
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="App bg-light">
      <div className="row justify-content-center">
        <div className="col-4">
          <Form inputs={state} setInputs={setState}></Form>
        </div>
      </div>
    </div>
  );
}

export default App;

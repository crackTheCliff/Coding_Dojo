import './App.css';
import Search from './components/search'
import Result from './components/results'
import ErrorPage from './components/info'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path="/:infoType/:id" element={<Result/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
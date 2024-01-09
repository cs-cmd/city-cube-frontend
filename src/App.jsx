import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header.jsx';
import SectionBreak from './components/SectionBreak/SectionBreak.jsx';

function App() {
  return (
    <>
      <Header />

      <SectionBreak />

      <Outlet />
    </>
  )
}

export default App

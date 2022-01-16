import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from './components/MyContext';
import Home from './pages/Home'
import PetCreate from './pages/PetCreate'
function App() {
  return (
    <MyContextProvider>
        <Home/>
    </MyContextProvider>
  );
}

export default App;
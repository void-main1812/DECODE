import { useState } from 'react'
import './App.scss'
import AnimatedRoutes from './components/AnimatedRoutes'
import LoadingScreen from './components/LoadingScreen';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <>
      {
        isLoading ? <LoadingScreen /> : <AnimatedRoutes />
      }
    </>
  )
}

export default App

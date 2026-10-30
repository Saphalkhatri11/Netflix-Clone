import Signup from './signup-page.jsx'
import { createContext, useState } from 'react'
export const useLanguage = createContext()

function App() {
const [language, setLanguage] = useState("English")
  return (
    <><useLanguage.Provider value={{language, setLanguage}}>
        <Signup/>

    </useLanguage.Provider>
      
    
    </>
  )
}

export default App

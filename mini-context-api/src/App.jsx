import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UsercontextProvider'

function App() {

  return (
    <UserContextProvider>
     <h5>React mini-context-api Project</h5>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App

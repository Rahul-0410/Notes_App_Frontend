import Loader from '../components/shared/loader';
import Main from '../Layouts/main';
import Login from '../pages/login'
// import styles from './style.module.scss'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Notes from '../pages/notes';
import SignUp from '../pages/signup';
import { AuthProvider } from '../AuthContext';



function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path='/notes' element={<Main/>}>
    <Route index element={<Notes/>} />
     </Route>
  </Routes>

    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

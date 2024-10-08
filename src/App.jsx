import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/chart';
import Navbar from './components/Navbar';
import { ExpenseProvider } from './context/ExpenseContext';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/Home';


function App() {
  
  return (
    <>
    <AuthProvider>
    <ExpenseProvider>
    <Router>
     <Navbar/>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<Dashboard />} />
        <Route path="/add" element={<ExpenseForm />} />
        <Route path="/edit-expense/:id" element={<ExpenseForm />} />
        <Route path="/expense" element={<ExpenseList />} />
        <Route path="/chart" element={<ExpenseChart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </Router>
    </ExpenseProvider>
    </AuthProvider>
    
   
   
    </>
  )
}

export default App

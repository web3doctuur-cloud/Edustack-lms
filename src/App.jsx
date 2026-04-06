import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Tutor from './components/Tutor';
import Accord from './components/Accord';
import Review from './components/Review';
import Footer from './components/Footer';
import Register from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <div className='flex flex-col min-h-screen w-full overflow-x-hidden bg-white'>
        
        <Nav session={session} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Services />
                <Tutor />
                <Accord />
                <Review />
              </>
            } />
            
            <Route path="/register" element={!session ? <Register /> : <Navigate to="/dashboard" />} />
            <Route path="/login" element={!session ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={session ? <Dashboard session={session} /> : <Navigate to="/login" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
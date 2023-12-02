
//import { Navbar, Footer, Services, Transactions, Welcome, Client, Contact, About, Features } from './components';
//import Chat from './components/ChatIcon';
import {First} from './components';
import {Login,Signup,Main,Error,PageLoader} from './components';
import { useState, useEffect } from 'react';
import { Route, Routes} from "react-router-dom";
//  <Route path="/main" element={<Navigate replace to="/login" />} />      
function App() {
  const [loading, setLoading] = useState(true);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    
    setTimeout(() => {
      setIsDataLoaded(true);
      setLoading(false);
    }, 3000);
  };
  const user = localStorage.getItem("token");
      return (
        <div>
            {loading ? <PageLoader /> : null}
            {isDataLoaded ? (
                <div>
                  <Routes>
                          {user && <Route path="/main" exact element={<Main />} />}
                          <Route path="/" element={<First />} />
                          <Route path="/signup" element={<Signup />} />
                          <Route path="/login" element={<Login />} />      
                          <Route path="*" element={<Error />} />   
                    </Routes>
                </div>
                  ) : null}
        </div>
        );
}

export default App;



import {First} from './components';
import {Login,Signup,Main,PageLoader,CreateBooks,Error,DeleteBook,EditBook,ShowBook} from './components';
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
                  {user && (
                        <>
                          <Route path="/main" exact element={<Main />} />
                          <Route path="/main/create" exact element={<CreateBooks />} />
                          <Route path='/book/details/:id' element={<ShowBook />} />
                          <Route path='/book/edit/:id' element={<EditBook />} />
                          <Route path='/book/delete/:id' element={<DeleteBook />} />
                        </>
                      )}
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


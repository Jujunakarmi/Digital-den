import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { userDetails } from './utils/API';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';



function App() {
  
  const dispatch = useDispatch()

  const fetchUserDetails = async () => {
const dataResponse = await userDetails()
const dataApi = await dataResponse.json();

if (dataApi.success){
  dispatch(setUserDetails(dataApi.data))
}

// console.log("datauser",dataApi)
  }
  useEffect(() => {
   //user Details
   fetchUserDetails()
  }, [])
  return (
    <>
    <Context.Provider value = {fetchUserDetails}>
    <Toaster position ="top-right"/>
      <Header />
      <main className='min-h-[calc(100vh-150px)] '>
      <Outlet />
      </main>
      <Footer/>
      </ Context.Provider>
    </>
  );
}

export default App;

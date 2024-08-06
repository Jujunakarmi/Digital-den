import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import ForgotPass from './pages/ForgotPass.jsx'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
    {
      path:"",
      element:<Home/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"/forgot-password",
      element:<ForgotPass/>
    },
    {
      path:"/sign-up",
      element:<Signup/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <RouterProvider router={router} />
  </Provider>
)

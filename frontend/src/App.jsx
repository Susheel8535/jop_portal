import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import { Toaster } from "@/components/ui/sonner"
import Jobs from './components/Jobs';
import Browse from './components/Browse'




const appRouter = createBrowserRouter ([

  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
 
])



function App() {
 

  return (
    <>
    
  <RouterProvider router  = {appRouter} />
   
    <Toaster />
    </>
  )
}

export default App

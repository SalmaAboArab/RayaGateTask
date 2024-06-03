import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PostsList from './PostsModule/Components/PostsList/PostsList'
import NotFound from './SharedModule/Components/NotFound/NotFound'
import PostDetails from './PostsModule/Components/PostDetails/PostDetails'
import MasterLayout from './SharedModule/Components/MasterLayout/MasterLayout'

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <MasterLayout/>,
      errorElement: <NotFound/>,
      children:[
        {index:true,element:<PostsList/>},
        {path:'details/:id',element:<PostDetails/>}
  ]
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
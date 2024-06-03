import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PostsList from './PostsModule/Components/PostsList/PostsList'
import NotFound from './SharedModule/Components/NotFound/NotFound'

function App() {
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <PostsList/>,
      errorElement: <NotFound/>
    }
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App

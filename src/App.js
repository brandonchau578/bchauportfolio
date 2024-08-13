import './App.css';
import HomePage from './components/HomePage/HomePage';
import LayOut from './components/Layout/LayOut';
import AboutPage from './components/AboutPage/AboutPage';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  

  function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <LayOut />,
        children:[
            {
                path:"/",
                element:<HomePage />
            },
            {
              path:"/About",
                element:<AboutPage />
            }
        ]
      },
      
    ]);
  
    return (
      <RouterProvider router={router} />
    );
  }
export default App;

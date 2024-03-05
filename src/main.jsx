import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import App from './App.jsx';
import Error from './pages/error.jsx';
import About from './pages/about.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';



const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <Error/>,
  children: [
    {
      index:true,
      element:<About/>,
    },
    {
      path: 'portfolio',
      element: <Portfolio/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'resume',
      element: <Resume/>
    }
  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}/>
)

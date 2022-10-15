import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
         element: <Topics></Topics>
       },
        {
          path: '/topics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
         element: <Topics></Topics>
       },
        {
          path: '/statistics',
         element: <Statistics></Statistics>
       },
        {
          path: '/blog',
         element: <Blog></Blog>
       },
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Practice from './components/Practice/Practice';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
         element: <Topics></Topics>
       },
        {
          path: '/topics',
          loader:async ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
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
        {
          path: '/topic/:topicName',
          loader: async ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicName}`)
          },
         element: <Practice></Practice>
       },
        {
          path: '*',
         element: <div><h2>404 Error, You are visiting a wrong page</h2></div>
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

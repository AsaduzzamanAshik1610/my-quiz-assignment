import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Chart from './Components/Chart/Chart';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Quiz from './Components/Quiz/Quiz';
import Quiz1 from './Components/Quiz1/Quiz1';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>,
        },
        {
           path:'/chart',
           element:<Chart></Chart>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
         path: 'quiz',
         loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz/1')
         },
         element:<Quiz></Quiz>,
        },
        {
          path:'/quiz/:quizId',
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz1></Quiz1>
        }
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

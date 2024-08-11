
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./containers/Home";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "saved",
                element: <Home />,
            },
            {
                path: "pokemon/:id",
                element: <Home />,
            },
        ],
    },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;

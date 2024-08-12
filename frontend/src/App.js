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
import PokemonPage from "./containers/PokemonPage";
import {CollectionProvider} from "./contexts/CollectionContext";
import Collection from "./containers/Collection";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/collection",
        element: <Collection />,
    },
    {
        path: "/pokemons/:id",
        element: <PokemonPage />,
    },
]);

function App() {
  return (
      <CollectionProvider>
        <RouterProvider router={router} />
      </CollectionProvider>
  );
}

export default App;

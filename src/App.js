import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { GlobalStateProvider } from "./context/GlobalState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />;
    </GlobalStateProvider>
  );
}

export default App;

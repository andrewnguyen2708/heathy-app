import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer";
import { routes } from "./containers/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

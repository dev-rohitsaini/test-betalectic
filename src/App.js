import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./logo.svg";
import "./App.css";
import AddPackage from "./components/AddPackage";
import Packages from "./components/Packages";
import ViewPackage from "./components/ViewPackage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Packages />}/>
        <Route path="/add-fav" element={<AddPackage />} />
        <Route path="/view-fav" element={<ViewPackage />} />
      </>
    )
  );
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

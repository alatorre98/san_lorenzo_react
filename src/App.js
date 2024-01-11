import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./components/Root";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> } >
    <Route index element={ <Homepage /> } />
    <Route path="about" element={ <About /> } />
  </Route>
));

function App() {
  return (
      <RouterProvider router={appRouter}/>
  );
}

export default App;

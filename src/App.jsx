import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
  </div>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;

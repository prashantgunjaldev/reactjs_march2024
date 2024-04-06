import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

export default function Root() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

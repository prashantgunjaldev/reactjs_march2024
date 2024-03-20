import classes from "./App.module.css";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <h1 className={classes.blue}>This is H1 from App component (Blue)</h1>
      <h1 className={classes.brown}>This is H1 from App component (brown)</h1>
      <h1 className={classes.red}>This is H1 from App component (red)</h1>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;

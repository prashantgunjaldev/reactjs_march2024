import "./App.css";
import AppContent from "./componets/app-content";
import AppFooter from "./componets/app-footer";
import AppHeader from "./componets/app-header";

function App() {
  return (
    // Fragment
    <>
      <AppHeader></AppHeader>
      <AppContent />
      <AppFooter />
    </>
  );
}

export default App;

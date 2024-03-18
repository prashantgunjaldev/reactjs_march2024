import { useState } from "react";
import "./App.css";
import AppContent from "./componets/app-content";
import AppFooter from "./componets/app-footer";
import AppHeader from "./componets/app-header";
import { webData } from "./data/webdata";
import UserInfo from "./componets/user-info";

function App() {
  let [content, setContent] = useState(null);

  function updateContent(newId) {
    setContent(webData.details[newId]);
  }

  return (
    // Fragment
    <>
      <AppHeader
        companyName={webData.title}
        options={webData.options}
        handleOnClick={updateContent}
      ></AppHeader>
      <AppContent content={content} />
      <UserInfo />
      <AppFooter />
    </>
  );
}

export default App;

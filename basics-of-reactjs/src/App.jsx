import { useState } from "react";
import "./App.css";
import AppContent from "./componets/app-content";
import AppFooter from "./componets/app-footer";
import AppHeader from "./componets/app-header";
import { webData } from "./data/webdata";

function App() {
  // webData;

  let [content, setContent] = useState("");

  function updateContent(newId) {
    // alert("Clicked some button" + pageName);
    setContent(newId + " is selected");
    console.log("Updated content", content);
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
      <AppFooter />
    </>
  );
}

export default App;

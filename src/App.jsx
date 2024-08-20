import "./css/app.css";
import Header from "./components/header";
import { useState } from "react";
import ItsMe from "./components/ItsMe";
import MyWorks from "./components/MyWorks";
import Contacts from "./components/Contacts";

function App() {
  const [tab, setTab] = useState("me");
  return (
    <>
      <Header active={tab} onChange={(current) => setTab(current)} />

      {tab === "me" && <ItsMe />}
      {tab === "works" && <MyWorks />}
      {tab === "contacts" && <Contacts />}
    </>
  );
}

export default App;

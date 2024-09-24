import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import {
  AddContact,
  EditContact,
  SearchContact,
  Contacts,
  Navbar,
  Spinner,
} from "./components/";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />{" "}
        {/* we redirect root page to contact  page and Navigate is a component from useNavigate hook */}
      </Routes>
      {/* <Contacts contacts={getContacts} loading={loading} /> */}
    </div>
  );
};

export default App;

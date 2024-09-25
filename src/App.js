import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  AddContact,
  EditContact,
  SearchContact,
  Contacts,
  Navbar,
  Spinner,
  ViewContact,
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
        <Route
          path="/contacts"
          element={<Contacts contacts={getContacts} loading={loading} />}
        />
        <Route path="/contacts/add" element={<AddContact />} />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
        {/* <Contacts contacts={getContacts} loading={loading} /> */}
      </Routes>
    </div>  
  );
};

export default App;

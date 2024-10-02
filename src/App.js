import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  AddContact,
  EditContact,
  // SearchContact,
  Contacts,
  Navbar,
  // Spinner,
  ViewContact,
} from "./components/";
import { getAllContacts, getAllGroups } from "./services/constactServices";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(contactsData);
        setGroups(groupsData);
        setLoading(false)
      } catch (err) {
        console.log(err.message);
        setLoading(false)
      }
    };
    fetchData();
  }, []);
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

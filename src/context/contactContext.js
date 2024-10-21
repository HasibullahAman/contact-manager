import { createContext } from "react";

export const ContactContext = createContext({
    loding: false,
    setLoding: () => {},
    contact: false,
    setContact: () => {},
    contacts: [],
    filteredContact: [],
    contactQuery: {},
    group: [],
    onContactChange: () => {},
    deleteContact: () => {},
    updateContact: () => {},
    createContact: () => {},
    contactSearch: () => {},
    });

// client/src/pages/AdminContacts.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminContacts.css";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwt");
      const res = await axios.get(
        "https://portfolio-backend-1-87ql.onrender.com/api/contacts",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContacts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err.message);
      setError("Failed to load contacts.");
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    const token = localStorage.getItem("jwt");
    try {
      await axios.delete(
        `https://portfolio-backend-1-87ql.onrender.com/api/contacts/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (err) {
      console.error("Failed to delete contact:", err.message);
      alert("Failed to delete contact.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="page-head">
          <p className="eyebrow">Internal</p>
          <h1>Contacts</h1>
        </div>

        {loading && <p>Loading contacts...</p>}
        {error && <p className="admin-error">{error}</p>}
        {!loading && contacts.length === 0 && <p>No contacts found.</p>}

        {contacts.length > 0 && (
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th><th>Email</th><th>Age</th><th>Number</th><th>Message</th><th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.firstname} {contact.lastname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.age}</td>
                    <td>{contact.contactNumber}</td>
                    <td>{contact.message.length > 50 ? contact.message.substring(0, 50) + "..." : contact.message}</td>
                    <td>
                      <button className="btn-danger" onClick={() => deleteContact(contact._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminContacts;

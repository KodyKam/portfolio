// client/src/pages/AdminContacts.js
import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./AdminContacts.css"; // optional, can use App.css styles

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("jwt");

      const res = await axios.get("https://portfolio-backend-1-87ql.onrender.com/api/contacts",
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
);
      setContacts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ Error fetching contacts:", err.message);
      setError("Failed to load contacts.");
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    const token = localStorage.getItem("jwt");

    try {
      await axios.delete(`https://portfolio-backend-1-87ql.onrender.com/api/contacts/${id}`,
        {headers: {Authorization: `Bearer ${token}` },
    }
);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete contact:", err.message);
      alert("Failed to delete contact.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="page-container">
      <h1>Admin - Contacts</h1>

      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && contacts.length === 0 && <p>No contacts found.</p>}

      {contacts.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1.5rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f2f5" }}>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Name</th>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Email</th>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Age</th>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Number</th>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Message</th>
              <th style={{ padding: "0.75rem", borderBottom: "1px solid #ccc" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>
                  {contact.firstname} {contact.lastname}
                </td>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>{contact.email}</td>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>{contact.age}</td>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>{contact.contactNumber}</td>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>
                  {contact.message.length > 50 ? contact.message.substring(0, 50) + "..." : contact.message}
                </td>
                <td style={{ padding: "0.75rem", borderBottom: "1px solid #eee" }}>
                  <button
                    className="btn"
                    style={{ backgroundColor: "#e74c3c" }}
                    onClick={() => deleteContact(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContacts;
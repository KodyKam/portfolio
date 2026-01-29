// client/src/api/api-contact.js

const BASE_URL =
  process.env.REACT_APP_API_URL;

const createContact = async (contact) => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });

  if (!res.ok) {
    const text = await res.text(); // important
    throw new Error(text || 'Failed to create contact');
  }

  return res.json();
};

export default createContact;
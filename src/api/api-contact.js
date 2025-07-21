// client/src/api/api-contact.js

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const createContact = async (contact) => {
  try {
    const res = await fetch(`${BASE_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error?.error || 'Failed to submit contact');
    }

    return await res.json();
  } catch (err) {
    throw err;
  }
};

export default createContact;
// client/src/api/api-contact.js

const createContact = async (contactData) => {
  try {
    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit contact');
    }

    return result;
  } catch (err) {
    console.error('❌ Submission failed:', err.message);
    throw err;
  }
};

export default createContact;
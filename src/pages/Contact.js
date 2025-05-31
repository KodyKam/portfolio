import './Contact.css';

function Contact() {
  return (
    <div className="pages-container">
      <h1>Contact Me</h1>
      <div className="contact-panel">
        <p><strong>Email:</strong> kamara.alleyne@example.com</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Location:</strong> Toronto, ON</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
      </div>
    </div>
  );
}

export default Contact;
import "./Contacts.css";

const Contacts = () => {
  return (
    <section className="contacts-section reveal" id="contact">
      <p className="contacts-eyebrow">Let’s talk</p>
      <h2 className="contacts-title">Get in Touch</h2>

      <div className="contacts-content">
        <p>
          I shitpost on{" "}
          <a
            href="https://x.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            X
          </a>{" "}
          all the time.
        </p>

        <p>
          Reach out with a direct question on{" "}
          <a
            href="https://x.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            X
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contacts;

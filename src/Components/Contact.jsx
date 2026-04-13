import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <ul>
        <li>
          <a href="mailto:seu.email@example.com">Email</a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Kaik. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Contact;

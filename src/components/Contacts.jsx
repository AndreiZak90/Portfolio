import whatsApp from "../../images/icon/whatsapp.png";
import mail from "../../images/icon/mail.png";
import git from "../../images/icon/github.svg";

export default function Contacts() {
  return (
    <section className="contact">
      <div className="contacts_block">
        <a href="#!" className="contact_link">
          <img src={whatsApp} />
          <a href="tel:89203538313" className="contact_link_phone">
            +7 (920) 353 - 83- 13
          </a>
        </a>
        <a href="malto:zak90@inbox.ru" className="contact_link">
          <img src={mail} />
          <a href="malto:zak90@inbox.ru" className="contact_link_phone">
            zak90@inbox.ru
          </a>
        </a>
        <a
          href="https://github.com/AndreiZak90?tab=repositories3"
          target="_blank"
          className="contact_link"
        >
          <img src={git} />
          <a
            target="_blank"
            href="https://github.com/AndreiZak90?tab=repositories3"
            className="contact_link_phone"
          >
            GitHub-repositories
          </a>
        </a>
      </div>
      <div className="footer_link">
        <a
          className="advertising"
          target="_blank"
          href="https://icons8.com/icon/DUEq8l5qTqBE/whatsapp"
        >
          WhatsApp и Mail
        </a>{" "}
        иконки от{" "}
        <a className="advertising" target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </section>
  );
}

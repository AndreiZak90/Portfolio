export default function ItsMe() {
  return (
    <>
      <section className="setionItsMe">
        <div className="title_block">
          <h2 className="main_title">Здравствуйте,</h2>
          <h3 className="title">
            меня зовут, <span className="title_bild">Андрей Закускин</span>,
            <br /> я начинающий
            <span className="title_bild_text"> Frontend-разработчик</span>
          </h3>
          <p className="title_text">
            в настоящее время поглощаю информацию, а в будущем намерем
            развиваться в различных направлениях, но душа лежит к{" "}
            <strong>REACT-Native</strong>
          </p>
        </div>
        <div className="img_block">
          <div className="img_block_box">
            <img src="../../images/me.JPG" alt="" className="img_me" />
          </div>
        </div>
      </section>
      <section className="sectionItsMe_box">
        <h3 className="sectionItsMe_box_block">Коротко обо мне...</h3>
        <p className="sectionItsMe_box_text">
          проработав более 8 лет на основном месте работы, решил сменить форму
          деятельность <strong>кординально</strong>, нашел интересующие видео на
          youTube, затем начал курс{" "}
          <a
            className="link_netology"
            href="https://netology.ru/programs/front-end"
            target="_blank"
          >
            Frontend-разрабочик на Нетологии
          </a>{" "}
          (который пока не закончил), в данный момент нахожусь в поисках работы
          на должность junior-Верстальщик
        </p>
      </section>
    </>
  );
}

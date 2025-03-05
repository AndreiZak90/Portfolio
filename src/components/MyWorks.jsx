import projLoft from "../../images/project_img/loft_house_prj.png";
import projSup from "../../images/project_img/sup_prj.png";
import youMeel from "../../images/project_img/YouMeel.png";

export default function MyWorks() {
  return (
    <>
      <section className="section_works">
        <div className="works_block">
          <div className="works_block_item">
            <div className="works_block_item_block_img">
              <img src={projLoft} className="works_block_item_img" />
            </div>
            <div className="works_block_box">
              <div className="works_block_box_link">
                <a
                  target="_blank"
                  href="https://andreizak90.github.io/project_loft-house_verstka/"
                  className="works_block_box_link_pages"
                >
                  GitHub Pages
                </a>
                <a
                  target="_blank"
                  href="https://github.com/AndreiZak90/project_loft-house_verstka"
                  className="works_block_box_link_repo"
                >
                  GitHub Repository
                </a>
              </div>
              <p className="works_block_box_link_text">
                Проект написан с помощью HTML и SCSS
              </p>
            </div>
          </div>
          <div className="works_block_item">
            <div className="works_block_item_block_img">
              <img src={projSup} className="works_block_item_img" />
            </div>
            <div className="works_block_box">
              <div className="works_block_box_link">
                <a
                  target="_blank"
                  href="https://andreizak90.github.io/project_SUP_verstrka/"
                  className="works_block_box_link_pages"
                >
                  GitHub Pages
                </a>
                <a
                  target="_blank"
                  href="https://github.com/AndreiZak90/project_SUP_verstrka"
                  className="works_block_box_link_repo"
                >
                  GitHub Repository
                </a>
              </div>
              <p className="works_block_box_link_text">
                Проект написан с помощью HTML и CSS
              </p>
            </div>
          </div>
          <div className="works_block_item">
            <div className="works_block_item_block_img">
              <img src={youMeel} alt="" className="works_block_item_img" />
            </div>
            <div className="works_block_box">
              <div className="works_block_box_link">
                <a
                  target="_blank"
                  href="https://andreizak90.github.io/foodDelivery/"
                  className="works_block_box_link_pages"
                >
                  GitHub Pages
                </a>
                <a
                  target="_blank"
                  href="https://github.com/AndreiZak90/foodDelivery"
                  className="works_block_box_link_repo"
                >
                  GitHub Repository
                </a>
              </div>
              <p className="works_block_box_link_text">
                Проект написан с помощью React, SCSS, Redux-Toolkit
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

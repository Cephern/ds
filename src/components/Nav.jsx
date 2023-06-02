import style from "../styles/Nav.module.css";
import logo from "../assets/logos/main.png";

function Nav() {
  return (
    <nav>
      <div className={style.navLeft}>
        <div className={style.logo}>
          <a href="/">
            <img src={logo} alt="DentServ logo" />
            <p>
              <span className={style.dent}>Дент</span>
              <span className={style.serv}>Сервис</span>
            </p>
          </a>
        </div>
        <div className={style.location}>
          <a href="#">
            <p> {/* location icon */}Москва, ул.Вильнюсская, д.13</p>
            <p>
              <span>{/* metro icon*/}м. Ясенево</span>{" "}
              <span>{/* metro icon*/}м. Теплы стан</span>
            </p>
          </a>
        </div>
      </div>

      <div className={style.navRight}>
        <div className={style.search}>
          <input type="search" name="search" />
          {/* search icon */}
        </div>

        <div className={style.links}>
          <ul>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
            <li>
              <a href="#">Цены</a>
            </li>
            <li>
              <a href="#">Врачи</a>
            </li>
            <li>
              <a href="#">Статьи</a>
            </li>
            <li>
              <a href="#">О клинике</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

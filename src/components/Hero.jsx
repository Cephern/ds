import style from "../styles/Hero.module.css";
import face from "../assets/photos/bannerFace.png";

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.imgWrapper}>
        <img src={face} alt="" />
      </div>

      <div className={style.heroBody}>
        <div className={style.heroText}>
          <h2>Клиника, где приятно лечить зубы</h2>

          <div className={style.heroLower}>
            <p>
              Мы создаём идеальные улыбки уже 30 лет! Предлагаем новейшие
              технологии и методики лечения в сочетании с высоким
              профессионализмом врачей
            </p>

            <div className={style.socials}>
              <ul>
                <li>VK</li>
                <li>Yo</li>
                <li>Tel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

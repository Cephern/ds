import Hero from "../components/Hero";
import Promos from "../components/Promos";
import style from "../styles/Main.module.css";

function Main() {
  return (
    <main className={style.main}>
      <Hero />
      <Promos />
    </main>
  );
}

export default Main;

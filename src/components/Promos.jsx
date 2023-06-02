import styles from "../styles/Promos.module.css";

import { useEffect, useRef, useState } from "react";

import { data } from "../context/data.jsx";

const setPosition = (positionArr) => {
  const result = {};
  if (positionArr[0] === "center") {
    result.top = "50%";
    result.left = "50%";
    result.transform = "translate(-50%, -50%)";
    return result;
  }

  if (positionArr[0]) result.top = positionArr[0];
  if (positionArr[1]) result.right = positionArr[1];
  if (positionArr[2]) result.bottom = positionArr[2];
  if (positionArr[3]) result.left = positionArr[3];

  return result;
};

function Promos() {
  const [promos, setPromos] = useState(data);
  const [currentPromo, setCurrentPromo] = useState(0);
  const [autoScroll, setAutoScroll] = useState(false);
  const [offset, setOffset] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  const contentRef = useRef(null);

  const setupAutoScroll = () => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentPromo((prev) => {
          if (prev === promos.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 300);
    }, 3000);

    setAutoScrollInterval(interval);
  };

  useEffect(() => {
    if (contentRef.current.children[0].children[0].complete) {
      setOffset(
        contentRef.current.children[0].getBoundingClientRect().width + 80
      );
      console.log("completed");
    } else {
      contentRef.current.children[0].children[0].addEventListener(
        "load",
        () => {
          setOffset(
            contentRef.current.children[0].getBoundingClientRect().width + 80
          );
          console.log("loaded");
        }
      );
    }

    window.addEventListener("resize", () => {
      setOffset(contentRef.current.children[0].clientWidth + 80);
    });

    return () => {
      clearInterval(autoScrollInterval);

      window.removeEventListener("resize", () => {
        setOffset(contentRef.current.children[0].clientWidth + 80);
      });
    };
  }, []);

  const handleLeftArrowClick = () => {
    setAutoScroll(false);
    setTimeout(() => {
      if (currentPromo > 0) setCurrentPromo((prev) => prev - 1);
      if (currentPromo === 0) setCurrentPromo(promos.length - 1);
    }, 300);
  };

  const handleRightArrowClick = () => {
    setAutoScroll(false);
    setTimeout(() => {
      if (currentPromo < promos.length - 1) setCurrentPromo((prev) => prev + 1);
      if (currentPromo === promos.length - 1) setCurrentPromo(0);
    }, 300);
  };

  const handleManualChange = (id) => {
    setAutoScroll(false);
    if (id === currentPromo) return;

    setTimeout(() => {
      setCurrentPromo(id);
    }, 300);
  };

  return (
    <div className={styles.Promos}>
      <div className={styles.slider}>
        <div
          ref={contentRef}
          className={styles.content}
          style={{ left: `-${offset * currentPromo}px` }}
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              className={styles.promo}
              onClick={() => setAutoScroll(false)}
            >
              <img src={promo.promoPhoto} alt={`Promo Photo ${promo.id}`} />

              <div
                className={styles.promoText}
                style={{
                  ...setPosition(promo.promoText.position),
                }}
              >
                <h3>Акция</h3>
                <h4>{promo.promoText.h4}</h4>
                <ul>
                  {promo.promoText.ul.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>

                <div className={styles.btns}>
                  <button>Подробнее</button>
                  <button>Записаться на приём</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.counter}>
        {promos.map((promo) => (
          <div
            key={promo.id}
            className={`${styles.counterItem} ${
              promo.id === currentPromo ? styles.active : ""
            }`}
            style={{ width: `${100 / promos.length}%` }}
            onClick={() => handleManualChange(promo.id)}
          ></div>
        ))}

        <svg
          className={styles.leftArrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={handleLeftArrowClick}
        >
          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
        </svg>

        <svg
          className={styles.rightArrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={handleRightArrowClick}
        >
          <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
        </svg>
      </div>
    </div>
  );
}

export default Promos;

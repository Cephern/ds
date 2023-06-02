import promo0 from "../assets/photos/promo0.png";
import promo1 from "../assets/photos/promo1.png";
import promo2 from "../assets/photos/promo2.png";
import promo3 from "../assets/photos/promo3.png";
import promo4 from "../assets/photos/promo4.png";

const data = [
  {
    id: 0,
    promoPhoto: promo0,
    promoText: {
      h4: "Консультация от Главного Врача",
      ul: [
        "Индивидуальный подход к каждому пациенту",
        "Дорого, но дешевле, чем обычно",
      ],
      position: ["20%", null, null, "10%"], // top, right, bottom, left
    },
  },
  {
    id: 1,
    promoPhoto: promo1,
    promoText: {
      h4: "Приходите с Пн по Вск и заплатите всего 100% стоимости услуг!",
      ul: [
        "Доступно круглый год",
        "Возможна предоплата",
        "Записывайтесь уже сегодня",
      ],
      position: [null, "10%", "20%", null], // top, right, bottom, left
    },
  },
  {
    id: 2,
    promoPhoto: promo2,
    promoText: {
      h4: "Скидка на услуги ресепшена по промокоду 'Салам'",
      ul: [
        "Приходите, как к себе домой",
        "Поможем всем, чем сможем",
        "Вы можете уйти, но обязаны вернуться",
        "За вежливое отношение к персоналу начислим экстра баллы",
      ],
      position: [null, "10%", "20%", null], // top, right, bottom, left
    },
  },
  {
    id: 3,
    promoPhoto: promo3,
    promoText: {
      h4: "По вашему желанию сделаем любой прикус",
      ul: ["Граф Дракула дома", "Фотография с ортопедом на память"],
      position: ["center"], // top, right, bottom, left
    },
  },
  {
    id: 4,
    promoPhoto: promo4,
    promoText: {
      h4: "Приводите одного ребенка, на второго посмотрим бесплатно",
      ul: ["Очень любим детей", "Прям невероятно"],
      position: [null, null, "2%", "2%"], // top, right, bottom, left
    },
  },
];

export { data };

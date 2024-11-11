"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Restaurants",
      [
        {
          name: "Angels and Demons",
          description: "Ресторан Ангелы и Деммоны лалалалал",
          address: "Московская, 2",
          images: [
            "https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg",
            "https://img.restoclub.ru/uploads/article/a/d/a/7/ada7722cf39c2a52be3ebaca12109dcf_w828_h552--big.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "OVO",
          description:
            "С момента открытия в 2016 году на втором этаже LOTTE HOTEL MOSCOW OVO стал одним из самых ярких столичных брендов и завоевал ряд высоких гастрономических наград, как российских, так и международных. Рекомендованный престижным гидом MICHELIN, OVO входит в число 45 лучших ресторанов Москвы.",
          address: "Новинский бульв., 8/2",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/12/4e/ed/ae/ovo-by-carlo-cracco.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/0f/5e/77/24/ovo-by-carlo-cracco.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/12/4e/e9/67/fresh-spring-menu.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Cantinetta Antinori",
          description:
            "Кантинетта Антинори Москва открылась в 2004 году и вскоре стала одним из самых известных ресторанов российской столицы.Он расположен в центре города, в историческом здании XIX века, недалеко от знаменитого Центрального дома художника Москвы.",
          address: "Денежный пер., д. 20",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/11/02/b6/30/cantinetta-antinori.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0f/c0/31/e0/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/11/02/b6/33/cantinetta-antinori.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/11/02/b6/37/cantinetta-antinori.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 2,
        },
        {
          name: "Аченти",
          description:
            "Мы находимся в самом центре столицы, но благодаря тому, что ресторан располагается в отдельностоящем особняке в тихом московском дворике, у нас очень спокойно и уютно.",
          address: "Кропоткинский пер., 7 Метро Парк Культуры",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/96/d2/38/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1a/96/d0/11/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1a/96/d2/74/caption.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Ритц-Карлтон Бар и Лобби Лаунж",
          description:
            "Стильный ресторан на крыше с террасой и впечатляющими панорамными видами на Красную площадь и Кремль.",
          address: "Тверская ул., 3",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/15/35/e5/a9/tea-ceremony.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1c/9f/ad/d7/spring-afternoon-tea.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1a/2f/ea/70/hendrick-s-afternoon.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 2,
        },
        {
          name: "Экспедиция",
          description:
            "Уже более 20-ти лет, когда-то первый ресторан Северной кухни в Москве, а сегодня уже легенда и место притяжения успешных романтиков со всего мира. В 15 минутах ходьбы от Кремля, тебя ждут в самом атмосферном ресторане столицы, в духе походного романтизма.",
          address: "Певческий переулок 6,",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/10/f2/0e/db/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/10/f2/1c/51/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/10/f2/1a/57/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/10/f2/17/ad/caption.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Ресторан-Бар Консерватория",
          description:
            "Ресторан-бар «Консерватория» — это оазис спокойствия в оживленном центре мегаполиса. Расположенный на 10 этаже отеля, он известен своим восхитительным панорамным видом на Кремль, Большой Театр и Государственную Думу. Авторские коктейли, изысканные блюда и нежные десерты сервируются с полудня и до позднего вечера, давая гостям возможность расслабиться и насладиться захватывающим обзором ближайших достопримечательностей. ",
          address: "ул. Неглинная, 4",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/23/61/7e/66/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1d/40/66/a0/conservatory-lounge-bar.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1d/40/66/91/conservatory-lounge-bar.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "O2 Lounge",
          description:
            "Ресторан на крыше отеля The Carlton, Moscow, панорамный вид, авторская кухня и атмосфера простой роскоши.Роскошь в ресторанном прочтении — это возможность уделить время себе, побаловать приятной обстановкой, вкусно поесть и насладиться богатой винной и коктейльной картой. Здесь нет места чопорности и скуке, здесь будет роскошно просто. ",
          address: "Тверская ул., 3 ",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/15/35/e1/b4/terrace.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1c/63/da/52/winter-terrace-inspired.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1c/63/dd/e3/panoramic-winter-gazebo.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Twins Garden",
          description:
            "Авторский ресторан. Twins Garden — ресторан, в основе концепции которого симбиоз науки и природы. Передовые технологические разработки + продукты с собственной фермы. В лаборатории, оснащенной самым современным кулинарным оборудованием, рождаются новые блюда и прогрессивные технологии их приготовления. Собственная ферма в Ярославской области дает возможность использовать на кухне самые свежие сезонные экопродукты.",
          address: "Страстной бульвар, 8А",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/11/87/9f/9c/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/11/87/a0/68/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/11/87/a3/6f/caption.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Эль Гаучо",
          description:
            "Аргентинский стейк-хаус на «Маяковке». В меню аргентинская кухня, стейки.",
          address: "Большой Козловский переулок, 3/2",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-f/12/8b/a3/c9/200.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/12/8b/a3/ce/160.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/08/f0/cf/79/caption.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Ресторан White Rabbit",
          description:
            "14 октября 2021 года впервые в истории России московские рестораны получили звезды «Мишлен».Инспекторы известного гида приехали в российскую столицу, чтобы оценить блюда и обслуживание в московских заведениях.",
          address: "Смоленская площадь, 3",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/1b/91/bf/b6/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1b/9d/3b/cd/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1b/8c/d2/7c/caption.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 2,
        },
        {
          name: "Рыбный базар",
          description:
            "Рыбный ресторан в Москве «Рыбный базар» - один из лучших ресторанов морепродуктов и средиземноморской кухни.",
          address: "Трехпрудный пер., д. 10/2",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/18/a3/6f/36/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/d1/92/63/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/0e/3c/d3/ce/caption.jpg",
          ],
          cuisineId: 1,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Сирена",
          description:
            "Sirena — ресторан-корабль, выполненный в виде испанского галеона, был спущен на воду московской гастрономии в 1992 году и успешно бороздит ее пространство и сейчас.",
          address: "Большая Спасская ул., 15 стр.4",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/1b/cf/89/0f/sirena.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1b/cf/89/3c/sirena.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1b/cf/89/4f/caption.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
        {
          name: "Стейк Хаус Бутчер",
          description:
            "Уже более 10 лет мы жарим по 500 000 стейков в год. И достигли в этом деле такого уровня мастерства, о котором невозможно молчать.«Бутчер» – это мясо исключительно премиум-класса из Аргентины, Уругвая и России. Мы с гордостью продемонстрируем вам стейки из меню и приготовим незабываемый соус прямо у вашего стола.",
          address: "Цветной бульвар, 2",
          images: [
            "https://media-cdn.tripadvisor.com/media/photo-s/06/80/0e/3e/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/1c/4f/80/fc/caption.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-f/1b/26/7b/23/caption.jpg",
          ],
          cuisineId: 5,
          cityId: 1,
          timetableId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Restaurants", null, {});
  },
};

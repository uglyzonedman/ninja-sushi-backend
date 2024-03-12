import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const createProducts = async (quantity: number) => {
  await prisma.product.createMany({
    data: [
      {
        name: 'Ромео',
        description:
          'Нори, Огурец, Рис, Кунжут, Крабовый замес, Манго, Зеленый лук, Водоросли чука, Маринованный лосось, Черный кунжут, Майонез, Красный сладкий чили',
        price: 4754,
        photoPath: 'roll1.webp',
        weight: 320,
        type: 'roll',
      },
      {
        name: 'Джульетта',
        description:
          'Лосось, Рис, Авокадо, Икра, Салат айсберг, Крабовый замес, Манго, Японский омлет тамаго, Трюфельная сальса, Манговый соус, Маменори, Майонез',
        price: 5110,
        photoPath: 'roll2.webp',
        weight: 315,
        type: 'roll',
      },
      {
        name: 'Хикари',
        description:
          'Нори, Огурец, Рис, Сыр сливочный, Тунец, Авокадо, Креветка, Крабовый замес, Чернила каракатицы, Водоросли чука, Японский майонез, Манговый соус, Сладкий чили, Горчица',
        price: 4754,
        photoPath: 'roll3.png',
        weight: 320,
        type: 'roll',
      },
      {
        name: 'Шерлок',
        description:
          'Нори, Огурец, Рис, Сыр сливочный, Авокадо, Манго, Чернила каракатицы, Водоросли чука, Манговый соус, Сладкий чили, Маринованный лосось, Осьминог, Горчица',
        price: 5467,
        photoPath: 'roll4.png',
        weight: 335,
        type: 'roll',
      },
      {
        name: 'Нами',
        description:
          'Рис, Сыр сливочный, Авокадо, Салат айсберг, Крабовый замес, Зеленый лук, Cир чеддер, Соус шрирача, Японский майонез, Трюфельная сальса, Маринованный халапеньо, Манговый соус, Маменори, Маринованный лосось',
        price: 5705,
        photoPath: 'roll5.png',
        weight: 350,
        type: 'roll',
      },
      {
        name: 'Макима',
        description:
          'Нори, Огурец, Рис, Сыр сливочный, Тунец, Икра, Крабовый замес, Зеленый лук, Cир чеддер, Соус шрирача, Японский майонез, Кимчи, Манговый соус, Сладкий чили, Осьминог, Горчица',
        price: 5110,
        photoPath: 'roll6.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Зелений дракон',
        description:
          'Нори, Рис, Сыр сливочный, Соус унаги, Авокадо, Креветка, Манго, Манго-ананасовый соус',
        price: 5110,
        photoPath: 'roll7.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Филадельфия с лососем и чеддером',
        description:
          'Нори, Рис, Сыр сливочный, Авокадо, Икра, Сыр Чеддер, Красная икра, Маринованный лосось',
        price: 5110,
        photoPath: 'roll8.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Фукуро',
        description:
          'Лосось, Нори, Рис, Соус унаги, Авокадо, Крабовый замес, Фисташки, Пате из утки, Тростниковый сахар',
        price: 5110,
        photoPath: 'roll9.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Киану',
        description:
          'Нори, Рис, Тунец, Авокадо, Спайсы соус, Креветка, Крабовый замес, Зеленый лук, Стружка тунца, Плавленый сыр, Японский майонез',
        price: 5110,
        photoPath: 'roll10.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Сакура',
        description:
          'лосось, огурец, рис, авокадо, икра, крабовый замес, сыр пармезан, японский омлет тамаго, соус шрирача, японский майонез, маринованный халапеньо, маменори, красная икра',
        price: 5110,
        photoPath: 'roll11.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Энигма',
        description:
          'Нори, Рис, Сыр сливочный, Соус унаги, Тунец, Авокадо, Манго, Японский омлет тамаго, Японский майонез',
        price: 5110,
        photoPath: 'roll12.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Кодзима',
        description:
          'Нори, Огурец, Рис, Сыр сливочный, Авокадо, Креветка, Крабовый замес, Японский омлет тамаго, Манговый соус, Маринованный лосось',
        price: 5110,
        photoPath: 'roll13.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Запеченный с пармезаном',
        description:
          'Лосось, Нори, Огурец, Рис, Кунжут, Авокадо, Икра, Салат айсберг, Сыр пармезан, Соус шрирача, Стружка тунца, Японский майонез',
        price: 5110,
        photoPath: 'roll14.png',
        weight: 330,
        type: 'roll',
      },
      {
        name: 'Гункан с осьминогом',
        description:
          'Лосось, Нори, Кунжут, Авокадо, Икра, Крабовый замес, Соус шрирача, Японский майонез, Осьминог',
        price: 1723,
        photoPath: 'sushi1.png',
        weight: 55,
        type: 'sushi',
      },
      {
        name: 'Гункан с тунцем и трюфелем',
        description:
          'Нори, Рис, Японский майонез, Бальзамик, Трюфельная сальса, Лук шнит',
        price: 1782,
        photoPath: 'sushi2.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан тунеть спайси',
        description:
          'Нори, Рис, Тунец, Соус шрирача, Японский майонез, Кунжутное масло, Лук шнит, Соус ворчестер',
        price: 1664,
        photoPath: 'sushi3.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан лосось спайси',
        description:
          'Лосось, Нори, Соус шрирача, Японский майонез, Кунжутное масло, Лук шнит, Соус ворчестер',
        price: 1782,
        photoPath: 'sushi4.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан расческа',
        description:
          'Нори, Рис, Икра, Морская расческа, Соус шрирача, Японский майонез',
        price: 1545,
        photoPath: 'sushi5.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан лосось',
        description: 'Лосось, Нори, Рис, Икра, Соус шрирача, Японский майонез',
        price: 1545,
        photoPath: 'sushi6.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан креветка',
        description:
          'Нори, Рис, Икра, Креветка, Соус шрирача, Японский майонез',
        price: 1545,
        photoPath: 'sushi7.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан вугор',
        description: 'Нори, Рис, Угорь, Икра, Соус шрирача, Японский майонез',
        price: 1545,
        photoPath: 'sushi8.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан тунец',
        description: 'Нори, Рис, Тунец, Икра, Соус шрирача, Японский майонез',
        price: 1545,
        photoPath: 'sushi9.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Нигири лосось',
        description: 'Лосось, рис',
        price: 1545,
        photoPath: 'sushi10.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Нигири угорь',
        description: 'Нори, Рис, Кунжут, Соус унаги, Угорь',
        price: 1545,
        photoPath: 'sushi11.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Нигири креветка',
        description: 'Рис, креветка',
        price: 1545,
        photoPath: 'sushi12.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Нигири с лососем и икрой',
        description: 'Лосось, Рис, Зеленый лук, Красная икра',
        price: 1545,
        photoPath: 'sushi13.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Нигири тунец',
        description: 'Тунец, рис',
        price: 1545,
        photoPath: 'sushi14.png',
        weight: 40,
        type: 'sushi',
      },
      {
        name: 'Гункан сет #2',
        description:
          'Рис, Угорь, Тунец, Авокадо, Икра, Чернила каракатицы, Зеленый лук, Японский майонез, Кимчи, Манговый соус, Маринованный лосось, Черный кунжут',
        price: 4991,
        photoPath: 'set1.png',
        weight: 240,
        type: 'set',
      },
      {
        name: 'Ninja сет #2',
        description:
          'Ninja с авокадо и лососем, Ninja с авокадо и тунцем, Ninja с креветкой спайсi, Ninja с креветкой и авокадо, Ninja с креветкой и лососем, Ninja с креветкой и тунцом',
        price: 11647,
        photoPath: 'set2.png',
        weight: 360,
        type: 'set',
      },
      {
        name: 'Сет #3',
        description:
          'Филадельфия с лососем, Филадельфия с угрем, Зеленый дракон',
        price: 16461,
        photoPath: 'set3.png',
        weight: 950,
        type: 'set',
      },
      {
        name: 'Сет #1',
        description: 'Маки лосось, Нигири лосось, Филадельфия с лососем',
        price: 15461,
        photoPath: 'set4.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Сет #2',
        description:
          'Нигири лосось, Филадельфия с лососем, Нигири угорь, Филадельфия с угрем',
        price: 15461,
        photoPath: 'set5.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Сет #4',
        description:
          'Нигири лосось, Филадельфия с лососем, Нигири угорь, Филадельфия с угрем, Зеленый дракон, Калифорния тунец, Феликс лосось, Осака',
        price: 15461,
        photoPath: 'set6.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Ninja сет',
        description:
          'Лосось, Рис, Кунжут, Cоус унаги, Угорь, Авокадо, Икра, Креветка, Морская расческа, Соус шрирача, Японский майонез',
        price: 15461,
        photoPath: 'set7.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Сет #6',
        description:
          'Зеленый дракон, Сливочный угорь, Филадельфия с лососем и авокадо, Запеченная креветка',
        price: 15461,
        photoPath: 'set8.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Сет DJ FM',
        description: 'Канада, 4 Сыры, Химавари',
        price: 15461,
        photoPath: 'set9.png',
        weight: 590,
        type: 'set',
      },
      {
        name: 'Fanta Pineapple',
        description: '',
        price: 1545,
        photoPath: 'drink1.png',
        volume: 0.355,
        type: 'drink',
      },
      {
        name: 'Sauvignon Winkl, Cantina Terlano',
        description: '',
        price: 12000,
        photoPath: 'drink2.png',
        volume: 0.75,
        type: 'drink',
      },
      {
        name: 'Prosecco Millesimato Rose, Canti',
        description: '',
        price: 12000,
        photoPath: 'drink3.png',
        volume: 0.2,
        type: 'drink',
      },
      {
        name: 'Sauvignon Blanc, Marlborough Sun',
        description: '',
        price: 12000,
        photoPath: 'drink4.png',
        volume: 0.375,
        type: 'drink',
      },
      {
        name: 'Cava Jaume Serra Brut, J.Garcia Carrion',
        description: '',
        price: 12000,
        photoPath: 'drink5.png',
        volume: 0.75,
        type: 'drink',
      },
      {
        name: 'Sauvignon Blanc, Marlborough Sun',
        description: '',
        price: 12000,
        photoPath: 'drink6.png',
        volume: 0.75,
        type: 'drink',
      },
      {
        name: 'Rose d`Anjou, Chatelain Desjacques',
        description: '',
        price: 12000,
        photoPath: 'drink7.png',
        volume: 0.75,
        type: 'drink',
      },
      {
        name: 'Pinot Grigio Pavia Blanc, Canti',
        description: '',
        price: 12000,
        photoPath: 'drink8.png',
        volume: 0.25,
        type: 'drink',
      },
      {
        name: 'Valpolicella Superiore Ripasso Marogne, Zeni',
        description: '',
        price: 12000,
        photoPath: 'drink9.png',
        volume: 0.75,
        type: 'drink',
      },
      {
        name: 'Coca-Cola Vanilla 0.33',
        description: '',
        price: 12000,
        photoPath: 'drink10.png',
        volume: 0.33,
        type: 'drink',
      },
      {
        name: 'Ninja с авокадо да лососем',
        description:
          'Нори, Рис, Авокадо, Крабовый замес, Фисташки, Маринованный лосось, Черный кунжут',
        price: 12000,
        photoPath: 'snack1.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Ninja с авокадо и тунцем',
        description:
          'Нори, Рис, Кунжут, Тунец, Авокадо, Икра, Крабовый замес, Кимчи',
        price: 12000,
        photoPath: 'snack2.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Ninja с креветкой спайси',
        description:
          'Нори, Рис, Авокадо, Икра, Креветка, Крабовый замес, Зеленый лук, Соус шрирача, Японский майонез',
        price: 12000,
        photoPath: 'snack3.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Ninja с креветкою да авокадо',
        description:
          'Нори, Рис, Авокадо, Креветка, Крабовый замес, Водоросли чука, Зернистая горчица, Черный кунжут',
        price: 12000,
        photoPath: 'snack4.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Ninja с креветкой и лососем',
        description:
          'Нори, Рис, Креветка, Крабовый замес, Фисташки, Маринованный лосось, Черный кунжут',
        price: 12000,
        photoPath: 'snack5.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Ninja с креветкой и тунцем',
        description:
          'Нори, Рис, Кунжут, Тунец, Икра, Креветка, Крабовый замес, Кимчи',
        price: 12000,
        photoPath: 'snack6.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Спринг-ролл с креветкой',
        description:
          'огурец, сыр сливочный, кунжут, авокадо, икра, салат айсберг, креветка, рисовое тесто, маринованный халапеньо, черный кунжут, кунжутный соус',
        price: 12000,
        photoPath: 'snack7.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Спринг-ролл с тунцем',
        description:
          'сыр сливочный, кунжут, тунец, икра, салат айсберг, крабовый замес, манго, рисовое тесто, кимчи, морковь, кунжутный соус.',
        price: 12000,
        photoPath: 'snack8.png',
        volume: 0.75,
        type: 'snack',
      },
      {
        name: 'Спринг-ролл с лососем',
        description:
          'Лосось, Сыр сливочный, Авокадо, Салат айсберг, Манго, Водоросли чука, Рисовое тесто, Маринованный халапеньо, Черный кунжут, Кунжутный соус',
        price: 12000,
        photoPath: 'snack9.png',
        volume: 0.75,
        type: 'snack',
      },
    ],
    skipDuplicates: true,
  });
};

async function main() {
  console.log('Start seeding...');
  await createProducts(1000);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
    console.log(`Created success`);
  });

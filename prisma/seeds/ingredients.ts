import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const createProducts = async (quantity: number) => {
  await prisma.productIngredient.createMany({
    data: [
      { name: 'Нори', photoPath: 'nori.png' },
      { name: 'Огурец', photoPath: 'cucumber.png' },
      { name: 'Рис', photoPath: 'rice.png' },
      { name: 'Кунжут', photoPath: 'sesame.png' },
      { name: 'Крабовый микс', photoPath: 'crab_snow.png' },
      { name: 'Манго', photoPath: 'mango.png' },
      { name: 'Зеленый лук', photoPath: 'green_onion-150x150.png' },
      { name: 'Водоросли чука', photoPath: 'algae_chuka.png' },
      { name: 'Маринованный лосось', photoPath: 'i146.png' },
      { name: 'Черный кунжут', photoPath: 'i147.png' },
      { name: 'Майонез', photoPath: 'i211.png' },
      { name: 'Красный сладкий чили', photoPath: 'i222.png' },
      { name: 'Авокадо', photoPath: 'avocado-150x150.png' },
      { name: 'Икра', photoPath: 'red-caviar-150x150.png' },
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

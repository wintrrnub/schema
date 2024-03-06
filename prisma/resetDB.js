const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function run() {
  await prisma.$executeRawUnsafe("DROP Database jirasak_back");
  await prisma.$executeRawUnsafe("CREATE Database jirasak_back");
}
console.log("Reset DB");
run();

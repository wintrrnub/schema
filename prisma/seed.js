const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const password = bcrypt.hashSync("456");

async function seedData() {
  try {
    // Create users
    const userData = [
      {
        user_id: 1,
        username: "thanasap1",
        password,
        email: "thanasap1@gmail.com",
        address: "001",
        phone: "1",
      },
      {
        user_id: 2,
        username: "thanasap2",
        password,
        email: "thanasap2@gmail.com",
        address: "002",
        phone: "2",
      },
      {
        user_id: 3,
        username: "thanasap3",
        password,
        email: "thanasap3@gmail.com",
        address: "003",
        phone: "3",
      },
    ];
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });

    // Create products
    const productData = [
      {
        product_id: 1,
        name: "1",
        description: "1",
        price: 1,
        img: "1",
        brand: "1",
        stock: 1,
      },
      {
        product_id: 2,
        name: "2",
        description: "2",
        price: 2,
        img: "2",
        brand: "2",
        stock: 2,
      },
      {
        product_id: 3,
        name: "3",
        description: "3",
        price: 3,
        img: "3",
        brand: "3",
        stock: 3,
      },
    ];
    await prisma.product.createMany({
      data: productData,
      skipDuplicates: true,
    });

    // Create carts
    const cartData = [
      {
        user_id: 1,
        product_id: 1,
        c_quantity: 1,
      },
      {
        user_id: 2,
        product_id: 2,
        c_quantity: 2,
      },
      {
        user_id: 3,
        product_id: 3,
        c_quantity: 3,
      },
    ];
    await prisma.cart.createMany({
      data: cartData,
      skipDuplicates: true,
    });

    // Create orders
    const orderData = [
      {
        order_id: 1,
        user_id: 1,
        order_date: new Date().toISOString(),
        total_price: 1,
        status: "1",
        payment_method: "1",
      },
      {
        order_id: 2,
        user_id: 2,
        order_date: new Date().toISOString(),
        total_price: 2,
        status: "2",
        payment_method: "2",
      },
      {
        order_id: 3,
        user_id: 3,
        order_date: new Date().toISOString(),
        total_price: 3,
        status: "3",
        payment_method: "3",
      },
    ];
    await prisma.order.createMany({
      data: orderData,
      skipDuplicates: true,
    });

    // Create order details
    const orderdetailData = [
      {
        order_detail_id: 1,
        order_id: 1,
        product_id: 1,
        quantity: 1,
        subtotal: 1,
      },
      {
        order_detail_id: 2,
        order_id: 2,
        product_id: 2,
        quantity: 2,
        subtotal: 2,
      },
      {
        order_detail_id: 3,
        order_id: 3,
        product_id: 3,
        quantity: 3,
        subtotal: 3,
      },
    ];
    await prisma.orderDetail.createMany({
      data: orderdetailData,
      skipDuplicates: true,
    });

    console.log("Seed completed successfully.");
  } catch (error) {
    console.error("Seed failed with error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();

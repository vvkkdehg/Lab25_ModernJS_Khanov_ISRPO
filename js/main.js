// console.log("Async/Await");

// async function greet() {
//     return "Привет!";
// }

// greet().then((message) => console.log(message));

// function getWeather() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ temp: 22, condition: "Солнечно" });
//     }, 1000);
//   });
// }

// async function showWeather() {
//   console.log("Загрузка погоды...");
//   const weather = await getWeather();
//   console.log(`Температура: ${weather.temp}°C, ${weather.condition}`);
// }

// showWeather();

// async function fetchData(shouldFail) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldFail) {
//         reject("Ошибка при загрузке данных");
//       } else {
//         resolve({ data: "Важные данные" });
//       }
//     }, 800);
//   });
// }

// async function getData() {
//   try {
//     const result = await fetchData(false);
//     console.log("Успешно:", result.data);

//     const failedResult = await fetchData(true);
//     console.log("Это не выполнится");
//   } catch (error) {
//     console.log("Поймана ошибка:", error);
//   }
// }

// getData();

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Прошло ${ms} миллисекунд`);
//     }, ms);
//   });
// }

// async function cookDinner() {
//   console.log("Начинаем готовить...");

//   const pasta = await delay(1000).then(() => "Паста готова");
//   console.log(pasta);

//   const sauce = await delay(500).then(() => "Соус готов");
//   console.log(sauce);

//   const salad = await delay(700).then(() => "Салат готов");
//   console.log(salad);

//   return "Ужин готов!";
// }

// cookDinner().then((result) => console.log(result));

// async function cookDinnerFast() {
//   console.log("Готовим всё одновременно...");

//   const [pasta, sauce, salad] = await Promise.all([
//     delay(1000).then(() => "Паста готова"),
//     delay(500).then(() => "Соус готов"),
//     delay(700).then(() => "Салат готов")
//   ]);

//   console.log(pasta, sauce, salad);
//   return "Ужин готов быстрее!";
// }

// cookDinnerFast().then((result) => console.log(result));

// function checkStock(inStock) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (inStock) {
//         resolve("Товар в наличии");
//       } else {
//         reject("Товара нет на складе");
//       }
//     }, 500);
//   });
// }

// function calculatePrice() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Стоимость: 1000 руб.");
//     }, 500);
//   });
// }

// function confirmOrder() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Заказ подтверждён");
//     }, 500);
//   });
// }

// async function processOrder() {
//   try {
//     const step1 = await checkStock(true);
//     console.log(step1);

//     const step2 = await calculatePrice();
//     console.log(step2);

//     const step3 = await confirmOrder();
//     console.log(step3);
//   } catch (error) {
//     console.log("Ошибка:", error);
//   }
// }

// processOrder();

// console.log("Fetch API");

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//       throw new Error(`HTTP ошибка! Статус: ${response.status}`);
//     }
//     const users = await response.json();
//     console.log("Первые 3 пользователя:");
//     users.slice(0, 3).forEach((user) => {
//       console.log(`- ${user.name} (${user.email})`);
//     });
//   } catch (error) {
//     console.log("Ошибка при загрузке пользователей:", error.message);
//   }
// }

// getUsers();

// async function getUserById(id) {
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const user = await response.json();
//     console.log(`Пользователь #${id}`);
//     console.log(`Имя: ${user.name}`);
//     console.log(`Город: ${user.address.city}`);
//     console.log(`Компания: ${user.company.name}`);
//   } catch (error) {
//     console.log("Ошибка:", error.message);
//   }
// }

// getUserById(1);

// async function createPost() {
//   try {
//     const newPost = {
//       title: "Моя первая запись",
//       body: "Это содержание моей первой записи в блоге",
//       userId: 1,
//     };
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     });
//     const createdPost = await response.json();
//     console.log("Создана новая запись:");
//     console.log("ID:", createdPost.id);
//     console.log("Заголовок:", createdPost.title);
//   } catch (error) {
//     console.log("Ошибка при создании записи:", error.message);
//   }
// }

// createPost();

// console.log("Optional Chaining");

// const user1 = {
//     name: "Андрей",
//     address: {
//         city: "Волжский",
//         street: "Пушкина",
//     },
// };

// const user2 = {
//     name: "Дмитрий",
// };

//const city = user2.address.city;

// const city1 = user2.address && user2.address.city;
// console.log("Город (старый способ): ", city1);

// const city2 = user2.address?.city;
// console.log("Город (новый способ):", city2);

// const street = user1.address?.street;
// console.log("Улица:", street);

// const admin = {
//   name: "Администратор",
//   permissions: {
//     canDelete: () => true,
//   },
// };

// const guest = {
//   name: "Гость",
// };

// console.log("Админ может удалять?", admin.permissions?.canDelete?.());
// console.log("Гость может удалять?", guest.permissions?.canDelete?.());

// const company = {
//   name: "Tech Corp",
//   employees: [
//     { name: "Надежда", role: "Developer" },
//     { name: "Анна", role: "Designer" }
//   ]
// };

// const startup = {
//   name: "New Startup"
// };

// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:", startup.employees?.[0]?.name);

// console.log("Nullish Coalescing");

// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;

// console.log('value1 || "default":', value1 || "default");
// console.log('value2 || "default":', value2 || "default");
// console.log('value3 || "default":', value3 || "default");

// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");

// function displayUserSettings(settings) {
//   const theme = settings?.theme ?? "light";
//   const fontSize = settings?.fontSize ?? 14;
//   const notifications = settings?.notifications ?? true;

//   console.log("Настройки пользователя:");
//   console.log("Тема:", theme);
//   console.log("Размер шрифта:", fontSize);
//   console.log("Уведомления:", notifications);
// }

// displayUserSettings({ theme: "dark", fontSize: 16 });
// displayUserSettings({ notifications: false });
// displayUserSettings({});

// const apiResponse = {
//   data: {
//     user: {
//       profile: {
//         settings: {
//           language: "ru",
//         },
//       },
//     },
//   },
// };

// const language = apiResponse.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык:", language);

// const emptyResponse = {};
// const defaultLanguage = emptyResponse?.data?.user?.profile?.settings?.language ?? "en";
// console.log("Язык по умолчанию:", defaultLanguage);

const order = {
  customer: {
    name: "Женек Журавский",
    email: "ne4elmol@yandex.ru",
    phone: "+7 992 412-79-64",
  },
  shipping: {
    address: {
      city: "Волжский",
      street: "87 гвардейская",
      house: "67",
    },
  },
  payment: {
    method: "банковская карта",
    status: "оплачено",
  },
};

function displayOrder(orderData) {
  const name = orderData.customer?.name ?? "Не указано";
  const city = orderData.shipping?.address?.city ?? "Не указан";
  const street = orderData.shipping?.address?.street ?? "Не указана";
  const house = orderData.shipping?.address?.house ?? "Не указан";
  const method = orderData.payment?.method ?? "Не выбран";
  const status = orderData.payment?.status ?? "Неизвестно";

  console.log(`Клиент: ${name}`);
  console.log(`Адрес: ${city}, ${street}, ${house}`);
  console.log(`Оплата: ${method}, статус: ${status}`);
}

displayOrder(order);

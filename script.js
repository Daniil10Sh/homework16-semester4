// async function delayedPromise(value, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(value);
//       }, delay);
//     });
//   }
  
//   async function executePromises() {
//     try {
//       const promises = [
//         delayedPromise('Проміс 1', 1000),
//         delayedPromise('Проміс 2', 2000),
//         delayedPromise('Проміс 3', 1500),
//         delayedPromise('Проміс 4', 2500),
//         delayedPromise('Проміс 5', 500),
//       ];
  
//       const results = await Promise.all(promises); // Чекаємо виконання всіх промісів
//       console.log('Усі проміси виконані:');
//       console.log(results);
//     } catch (error) {
//       console.error('Помилка в одному з промісів:', error);
//     }
//   }
  
//   executePromises();
  


async function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
  async function getFastestPromise(promises) {
    try {
      const fastestResult = await Promise.race(promises);
      console.log('Найшвидший проміс вирішений:');
      console.log(fastestResult);
    } catch (error) {
      console.error('Сталася помилка:', error);
    }
  }
  
  (async () => {
    const promises = [
      randomDelay('Проміс 1'),
      randomDelay('Проміс 2'),
      randomDelay('Проміс 3'),
      randomDelay('Проміс 4'),
      randomDelay('Проміс 5')
    ];
  
    await getFastestPromise(promises);
  })();
  
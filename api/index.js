//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  // const verificacion = await Activities.findAll()
  // if(verificacion.length < 1){
  //   //lo tendre que cargar
  //   const pedido = await axios.get(`https://restcountries.com/v3/all`)

  //   const formateo = pedido.data.results?.map(mp => {
  //     return {
  //       name: mp.name
  //     }
  //   })
  //   // bulkCreate --> recibe un arreglo de objetos, y crea una fila por cada uno
  //   await Temperament.bulkCreate(formateo) // [{...}, {episodios}]
  // }
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

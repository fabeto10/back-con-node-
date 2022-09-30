const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola nuevo end-point');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port '+ port);
});
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send('No hay parametros');
//   }
// });

// app.get('/categories/:categoryId/products/:porductId', (req, res) => {
//   const {categoryId, porductId} = req.params;
//   res.json({
//     categoryId,
//     porductId
//   });
// });


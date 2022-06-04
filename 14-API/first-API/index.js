const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
  
app.use(express.json());

// endpoints
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'first router success'
  });
});

app.post('/createproduct', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!name) {
    res.status(200).json({
      maessage: 'um dos parametros é inválido'
    });
    return;
  }

  res.status(201).json({
    message: `produto ${name}, criado com sucesso ${price}`
  });
  return;
});

// port
app.listen(3000);
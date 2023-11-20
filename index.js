const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.post('/api/enviarDados', (req, res) => {
  // Recupera os valores do corpo da requisição
  const { nomeEmpresa, endereco, comanda, pagamento, valor, status } = req.body;

  // Monta a URL com base nos valores recebidos
  const url = `vroom-401401.firebaseapp.com/${nomeEmpresa}/${endereco}/${comanda}/${pagamento}/${valor}/${status}`;

  // Envia a URL como resposta
  res.json({ url });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://192.168.3.39:${port}`);
});
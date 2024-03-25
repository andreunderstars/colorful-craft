# Colorful Craft

Este é um projeto utilizando react native com Expo como entrega para a capacitação de react native.

## Rodando o Projeto

Para rodá-lo, siga os passos:

1. Clonando o repositório:

```
$ git clone https://github.com/andreunderstars/colorful-craft
$ cd colorful-craft
```

2. Instalando as dependências:

```
$ npm install
```

3. Rodando o projeto:

```
$ npm start
```

4. Em seguida, scanneie o QR Code com o aplicativo Expo Go no android ou com a câmera do iPhone.

## Iniciando a API

Utilize o json server para iniciar a API do projeto.

1. Em `./services/api.js`, altere o valor da baseURL para o url onde o Metro está rodando, encontrado abaixo do QR Code ao iniciar o Expo.

```
import axios from "axios";

const api = axios.create({
  baseURL: "", //inserir URL aqui
});

export default api;
```

2. Rode o comando, substituindo o [url] pelo mesmo valor alterado no item anterior:

```
npx json-server --watch --host [url] db.json
```

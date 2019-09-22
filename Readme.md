# Configurando o ambiente

Entre no diretorio do projeto e antes de configurar o webpack crie um arquivo chamado de "package.json" 
`mkdir package.json`


## webpack:

Agora é preciso instalar o webpack no seu projeto

`npm install --save-dev webpack@1`

Instale também o webpack de forma global, para usar o comando webpack no seu terminal:

`npm install -g webpack@1`

## webpack-dev-server:

`npm install --save-dev webpack-dev-server@1`

Instale também o webpack-dev-server de forma global, para usar o comando webpack-dev-server no seu terminal:

`npm install -g webpack-dev-server@1`

A ideia do webpack e pegar os modulos e juntar num pacote pra que ele possa entregar ao navegador um bundle com ecmascript5 q é o formato q o browser consegue ler 

## react e react-

`npm install --save react@15.4 react-dom@15.4`

## dependências do babel:

`npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6`

## babel-preset-react:

`npm install --save-dev babel-preset-react@6`

Após instalar o babel e seus presets é necessario configurar o dotfile .babelrc e add entradas '{"presets": ["es2015","stage-0"]} 

tambem é preciso atualiazar o arquivo webpack.config.js pra q ele utilize o babel pra que toda vez q alterar o arquivo js ele utilize o babel para poder copilar e gerar nosso arquivo ecmascript5

`module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }`

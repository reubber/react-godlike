# Configurando o ambiente

Entre no diretorio do projeto e crie um arquivo chamado de "package.json" antes de configurar o webpack do proximo passo

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

A ideia do webpack é pegar os modulos e juntar num pacote pra que ele possa entregar ao navegador um bundle com ecmascript5 q é o formato naqual o browser consegue ler 

## react e react-DOM

`npm install --save react@15.4 react-dom@15.4`

## dependências do babel:

`npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6`

## babel-preset-react:

`npm install --save-dev babel-preset-react@6`

Após instalar o babel e seus presets é necessario configurar o dotfile .babelrc e add entradas:
`{`
   ` "presets": ["es2015","stage-0"],`  
`}` 

tambem é preciso atualiazar o arquivo webpack.config.js pra q ele utilize o babel pra que toda vez q alterar o arquivo js ele utilize o babel para poder copilar e gerar nosso arquivo ecmascript5

`module: {
loaders: [{`

      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  `}`

## Adicione entrada sourcemaps no `webpack.config.js`

`devtool: "source-map",`

Os `sourcemaps` são impressionantes. Ou seja, eles são usados ​​para exibir seu JavaScript original durante a depuração, o que é muito mais fácil de analisar do que o código de produção

## react-hot-loader (live-reload)

 Melhora a experiência de desenvolvimento atualizando automaticamente os módulos no navegador em tempo de execução sem precisar de uma atualização inteira da página. Isso significa que o estado do aplicativo pode ser mantido enquanto você muda pequenas coisas.

`npm install --save-dev react-hot-loader@3.0.0-beta.2`

proximo passo é fazer a atualização do `webpack.config.js` para que ele possa fazer a utilização do nosso `react-hot-loader`

começe mudando o `entry` na config para um array ao inves de somente umas string e passar a seguintes entradas:

    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',

Agora adicione o module do webpack entrando no arquivo `webpack.config.js` para poder usar plugin do hot-loader 

`const webpack = require('webpack')`

e depois adicione o plugin

``plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],``

  o proximo passo é fazer a atualização do dotfile `.babelrc` adionando o react-hot-loader nesse arquivo, ficando da seguinte forma:

` "presets": ["es2015","stage-0"],`
   `"plugins": ["react-hot-loader/babel"]`

para que o Babel  também ele consiga entender que a gente está fazendo a atualização de um módulo
que utiliza o ecscript 6.




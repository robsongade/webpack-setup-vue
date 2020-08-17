
# WEBPACK+TYPESCRIPT+VUE

Este é um setup simples com webpack,typescript e vue!!!

## dependências globais:

>**npm,node,webpack,webpack-dev-server,webpack-cli**

|modulo |versão
|-|-
|npm |6.14.4
|node |12.14.0
|webpack-dev-server | 3.11.0
|webpack-cli |3.3.12
|webpack |4.44.1

## Instalação

Clone o projeto

>git clone https://github.com/robsongade/webpack-setup-vue.git

Entre na pasta

>cd webpack-setup-vue
  
Execute npm update para as dependências do projeto serem baixadas

>npm update

### Comandos

|Commandos|Descrição|Obs.:|
|-|-|-
|npm start | acessar http://localhost:8080 | 8080 é a porta padrão, observar no terminal, você poderá também mudar a pasta passando como parâmetro, veja como na documentação do webpack(link nas referências)
npm run build| build em modo desenvolvedor | Os arquivos de build fina na pasta build
npm run build:prod | gerar em modo produção | seram gerados arquivos minificados na pasta build

Você poderá usar commandos e parâmetros de acordo com que precisar, recomendo que use as documentações oficiais(veja links nas referências)

### Resultado

![Breve resultado](https://raw.githubusercontent.com/robsongade/webpack-intro/master/src/css/images/screencapture.png)

## Referências

[Documentação node](https://nodejs.org/docs/latest-v12.x/api/)

[Documentação npm](https://docs.npmjs.com/)

[Documentação Webpack](https://webpack.js.org/concepts/)

[Documentação Vue](https://vuejs.org/v2/guide/)

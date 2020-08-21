<template>
  <div class>
    <h1>{{title}}</h1>
    <span>
      {{sub_title}}
    </span>
      <br />
      <br />
      <br />
    <img :src="img" />
  </div>
</template>

<script>


export default {
    data(){
        return {
            title: `Olá mundo, meu nome é ${name?name:"(informe seu nome em .env"}!`,
            sub_title: 'Este é apenas um exemplo simples de uma aplicação com webpack e typescript!!!',
            img : require('src/css/images/webpack-ts.jpg').default
        }
    }
};
</script>

<style>
</style>
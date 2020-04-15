<template>
  <div id='app'>
    <NavBar />
    <!-- <img src='./assets/logo.png'>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text=''<el-button>''></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>-->
    <HelloWorld msg='Welcome to Your Vue.js App2' />
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

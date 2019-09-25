<template>
  <div id="app">
    <router-view/>
<van-tabbar route   active-color="#4396f6" inactive-color="#000">
  <van-tabbar-item to="/home">
    <span>航班</span>
    <img
      slot="home_icon"
      slot-scope="props"
      :src="props.active ? home_icon.active : home_icon.normal"
    >
  </van-tabbar-item>
  <van-tabbar-item
    to="/hotel"
    icon="search"
  >
    酒店
  </van-tabbar-item>
    <van-tabbar-item
    to="/folder"
    icon="search"
  >
    收藏夹
  </van-tabbar-item>
    <van-tabbar-item
    to="/explore"
    icon="search"
  >
    探索
  </van-tabbar-item>
    <van-tabbar-item
    to="/my"
    icon="search"
  >
    账号
  </van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'App',
         data() {
            return {
                active: 0,
                home_icon: {
                    normal: require('img/飞机.png'),
                    active: require('img/飞机hui.png')
                },
                // category_icon: {
                //     normal: require('img/飞机.png'),
                //     active: require('img/飞机.png')
                // },
                // message_icon: {
                //     normal: require('img/飞机.png'),
                //     active: require('img/飞机.png')
                // },
                // cart_icon: {
                //     normal: require('img/飞机.png'),
                //     active: require('img/飞机.png')
                // },
                // mine_icon: {
                //     normal: require('img/飞机.png'),
                //     active: require('img/飞机.png')
                // }
            }
        }
    }
</script>
 
<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
*{
    padding: 0;
    margin: 0;
  }
  body{
    background: -webkit-linear-gradient(#4396f6, #4396f6)
  }
</style>

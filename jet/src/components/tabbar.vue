<template>
<van-tabbar route   active-color="#4396f6" inactive-color="#000">
  <van-tabbar-item to="/home">
    <span>航班</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? home_icon.active : home_icon.normal"
    >
  </van-tabbar-item>
    <van-tabbar-item to="/hotel">
    <span>酒店</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? hotel_icon.active : hotel_icon.normal"
    >
    </van-tabbar-item>
    <van-tabbar-item to="/folder">
    <span>收藏夹</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? folder_icon.active : folder_icon.normal"
    >
    </van-tabbar-item>
    <van-tabbar-item to="/explore">
    <span>探索</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? explore_icon.active : explore_icon.normal"
    >
    </van-tabbar-item>
    <van-tabbar-item to="/my">
    <span>账号</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? my_icon.active : my_icon.normal"
    >
    </van-tabbar-item>
</van-tabbar>
</template>
<script>
export default {
   name:"tabbar",
   props:{
    active:{default:""}
    },               
         data() {
            return {
              active2:0,//???
                home_icon: {
                    normal:require('./../img/飞机hui.png'),
                    active:require('./../img/飞机.png')
                },
                hotel_icon: {
                    normal: require('./../img/床hui.png'),
                    active: require('./../img/床.png')
                },
                folder_icon: {
                    normal: require('./../img/爱心hui.png'),
                    active: require('./../img/爱心.png')
                },
                explore_icon: {
                    normal: require('./../img/椰树hui.png'),
                    active: require('./../img/椰树.png')
                },
                my_icon: {
                    normal: require('./../img/我的hui.png'),
                    active: require('./../img/我的.png')
                }
            }
        }
    }
</script>
 
<style>

</style>


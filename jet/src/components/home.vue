<template>
  <div>
    <div>
      <van-tabs
        v-model="active"
        animated
        swipeable
        color="#fff"
        background="transparent"
        title-active-color="#fff"
        title-inactive-color="#ddd"
      >
        <van-tab v-for="(item,index) in Arr" :title="item.name" :key="index">
          <div v-if="index==0">我是第一个</div>
          <div v-if="index==1">
            <div id="sou">
              <div id="dizhi">
                <button class="jiaohuan" @click="change"><img src="./../img/交换.png" alt  /></button>
                <van-button class="city">
                  <div class="zhong">
                      <img src="./../img/定位.png" alt class="dingwei" />广州
                      <div class="ying">CAN</div>
                    </div>
                </van-button>
                <van-divider :style="{ borderColor: '#ddd', padding:'0 80px 0 40px',margin:'0' }"></van-divider>
                <van-button class="city">
                  <div class="zhong">
                      <img src="./../img/定位.png" alt class="dingwei" /> 香港
                    <div class="ying">HKG</div>
                  </div>
                </van-button>
              </div>
              <div id="riqi">
                <van-button class="date">
                  <div>
                      <img src="./../img/定位.png" alt class="dingwei" />2019年10月16日，星期三
                  </div>
                </van-button>
                <van-divider :style="{ borderColor: '#ddd', padding:'0 0 0 30px',margin:'0' }"></van-divider>
                <van-button class="date">
                  <div>
                      <img src="./../img/定位.png" alt class="dingwei" /> 香港
                  </div>
                </van-button>
              </div>
            </div>
          </div>
          <div v-if="index==2">我是第三个</div>
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <tabbar></tabbar>
    </div>
  </div>
</template>
<script>
import tabbar from "./tabbar.vue";
export default {
  data() {
    return {
      active: 1,
      Arr: [
        {
          name: "历史记录"
        },
        {
          name: "搜索"
        },
        {
          name: "多城市"
        }
      ]
    };
  },
  components: {
    tabbar
  },
  methods: {
    change(){
      console.log("交换")
    }
  }
};
</script>
<style  scoped>
#sou {
  text-align: center;
}
#dizhi {
  display: inline-block;
  margin-top: 160px;
  border-radius: 10px;
  background-color: white;
  width: 90%;
  height: 130px;
  position:relative
}
.city {
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  height: 49%;
  justify-content:space-around;
}
.ying{
  display: flex;
    float:right;
}
.dingwei {
  width: 18px;
}
.jiaohuan {
  width:40px;
  height:40px;
  position: absolute;
  top:44px;
  left:263px;
  border: none;
  background-color: transparent;
  z-index: 999;
}
#riqi {
  display: inline-block;
  margin-top: 20px;
  border-radius: 10px;
  background-color: white;
  width: 90%;
  height: 130px;
}
.date {
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  height: 49%;
  display: flex;
  float:left;
}
</style>
<style >
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px 0 !important;
}
body {
  background: -webkit-linear-gradient(#4396f6, #4396f6);
}
</style>
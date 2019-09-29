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
                <button class="jiaohuan" @click="change">
                  <img src="./../img/交换.png" alt />
                </button>
                <van-button class="city" @click="cshow">
                  <div class="zhong">
                    <img src="./../img/定位.png" alt class="dingwei" />广州
                  </div>
                  <div class="ying">CAN</div>
                </van-button>
                <van-divider :style="{ borderColor: '#ddd', padding:'0 80px 0 40px',margin:'0' }"></van-divider>
                <van-button class="city" @click="cshow">
                  <div class="zhong">
                    <img src="./../img/定位.png" alt class="dingwei"   />香港
                  </div>
                  <div class="ying">HKG</div>
                </van-button>
              </div>
              <div id="riqi">
                <van-button class="date" @click="dshow">
                  <div>
                    <img src="./../img/日历.png" alt class="dingwei" />2019年10月16日，星期三
                  </div>
                </van-button>
                <van-divider :style="{ borderColor: '#ddd', padding:'0 0 0 30px',margin:'0' }"></van-divider>
                <van-button class="date" @click="dshow">
                  <div>
                    <img src="./../img/加.png" alt class="dingwei" />添加返程航班
                  </div>
                </van-button>
              </div>
              <div id="renshu" @click="rshow">
                <van-button class="location">
                  <div class="zhong">
                    <img src="./../img/人数.png" alt class="dingwei" />1位乘客，经济舱
                  </div>
                  <div class="ying">
                    <img src="./../img/三角.png" alt />
                  </div>
                </van-button>
              </div>
              <div id="queding">
                <van-button class="an">搜索航班</van-button>
              </div>
            </div>
          </div>
          <div v-if="index==2">我是第三个</div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="show"  position="bottom" :style="{ height: '90%' }">
      <form action="/">
        <van-search v-model="sou_value" placeholder="城市、国家或机场" show-action class="search" />
      </form>
    </van-popup>
        <van-popup v-model="dateshow"  position="bottom" :style="{ height: '50%' }">
               日历
    </van-popup>
    <van-popup v-model="renshow" position="bottom" :style="{ height: '60%' }">
          <div>
           <p>舱位和乘客</p> 
                <van-divider :style="{ borderColor: '#ddd',margin:'0' }"></van-divider>
          </div>
          <div>
            <van-row>
  <van-col span="12">
    <ul>
      <li>成人</li>
      <li>12岁以上</li>
    </ul>
  </van-col>
  <van-col span="12">
    <van-stepper v-model="man_value" />
  </van-col>
</van-row>
          </div>
    </van-popup>
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
      man_value: 1,
      renshow:false,
      dateshow:false,
      sou_value:"",
      show: false,
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
    change() {
      console.log("交换");
    },
    cshow() {
      this.show = !this.show;
    },
    dshow(){
      this.dateshow=!this.dateshow;
    },
    rshow(){
      this.renshow=!this.renshow;
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
  margin-top: 100px;
  border-radius: 10px;
  background-color: white;
  width: 90%;
  height: 120px;
  position: relative;
}
.city {
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: normal;
  font-size: 15px;
  height: 48%;
  padding-right: 30px;
  z-index: 9;
}
.zhong {
  float: left;
}
.ying {
  display: flex;
  /* float:left; */
  float: right;
}
.dingwei {
  width: 18px;
  position: relative;
  top: 2px;
  margin-right: 6px;
}
.jiaohuan {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 43px;
  left: 270px;
  border: none;
  background-color: transparent;
  z-index: 999;
}
#riqi {
  display: inline-block;
  margin-top: 6px;
  border-radius: 10px;
  background-color: white;
  width: 90%;
  height: 120px;
}
.date {
  border: none;
  background-color: transparent;
  width: 100%;
  font-weight: normal;
  font-size: 15px;
  height: 49%;
  display: flex;
  float: left;
}
#renshu {
  display: inline-block;
  margin-top: 10px;
  border-radius: 10px;
  background-color: white;
  width: 90%;
  height: 60px;
}
.location {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-weight: normal;
  font-size: 15px;
  padding-right: 30px;
}
.an {
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  font-weight: normal;
  font-size: 16px;
  color: white;
}
#queding {
  display: inline-block;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #f5a333;
  width: 90%;
  height: 50px;
}
.search {
  margin-top: 20px;
  border-bottom:1px solid #eee;
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
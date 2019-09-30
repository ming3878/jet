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
    <van-popup v-model="renshow" position="bottom" :style="{  }">
          <div>
           <p class="title">舱位和乘客</p> 
                <van-divider :style="{ borderColor: '#ddd',margin:'0' }"></van-divider>
          </div>
          <div class="man">
            <van-row>
  <van-col span="12">
    <ul>
      <li class="dazi">成人</li>
      <li class="xiaozi">12岁以上</li>
    </ul>
  </van-col>
  <van-col span="12" class="jia">
    <van-stepper v-model="man_value" />
  </van-col>
</van-row>
          </div>
           <div class="man1">
            <van-row>
  <van-col span="12">
    <ul>
      <li class="dazi">儿童</li>
      <li class="xiaozi">2至12岁</li>
    </ul>
  </van-col>
  <van-col span="12" class="jia">
    <van-stepper v-model="child_value" />
  </van-col>
</van-row>
          </div>
           <div class="man1">
            <van-row>
  <van-col span="12">
    <ul>
      <li class="dazi">婴儿</li>
      <li class="xiaozi">0至2岁</li>
    </ul>
  </van-col>
  <van-col span="12" class="jia">
    <van-stepper v-model="baby_value" />
  </van-col>
</van-row>
<a-slider :marks="cang_value" :step="null" :defaultValue="0" class="cang" />
          </div>
          <div class="wancheng">
                <van-button class="an">完成</van-button>
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
      cang_value:{0:'经济舱',33:'豪华经济舱',66:'商务舱',100:'头等舱'},
      man_value: 1,
      child_value:1,
      baby_value:1,
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
  width: 94%;
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
  top: -2px;
  margin-right: 6px;
}
.jiaohuan {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 43px;
  left: 284px;
  border: none;
  background-color: transparent;
  z-index: 999;
}
#riqi {
  display: inline-block;
  margin-top: 6px;
  border-radius: 10px;
  background-color: white;
  width: 94%;
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
  width: 94%;
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
  width: 94%;
  height: 50px;
}
.search {
  margin-top: 20px;
  border-bottom:1px solid #eee;
}
.man{
  padding: 0 20px;
  margin-top:20px;
}
.man1{
  padding: 0 20px;
  margin-top:20px;
}
.dazi{
  font-size: 16px;
  color: #000;
  font-weight:bold;
}
.xiaozi{
  margin-top:2px;
  color: #999;
  font-size:14px;
}
.title{
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-size:17px;
  color:#000;
  font-weight:bold;
}
.van-stepper{
  margin-left: 20px;
}
.cang{
  margin-bottom:120px;
}
.wancheng {
  margin: 0 auto;
  border-radius: 10px;
  background-color: #4396f6;
  width: 90%;
  height: 50px;
  position:absolute;
  bottom: 30px;
  left:5%;
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
.van-stepper__minus {
     width:36px;
     height: 36px;
     color: #7ab1f8;
    background-color: #f7f7ff;
    border-radius:20px;
}
.van-stepper__input {
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 16px;
    padding: 0;
    color: #2d2d2d;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 0;
    border-width: 1px 0;
    -webkit-appearance: none;
    font-weight:bold;
}
.van-stepper__plus {
   color: #3f8ff2;
    background-color: #e7f1fd;
    border-radius:20px;
    width:36px;
    height: 36px;
}
.ant-slider-mark {
    font-size: 8px;
    white-space:nowrap;
} 
</style>
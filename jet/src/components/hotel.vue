<template>
<div>
  酒店
 <van-button @click="showPopup">展示弹出层</van-button>

<van-popup v-model="cshow" round position="bottom" :style="{ height: '20%' }" >da dadadaaaa</van-popup>
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
      cshow: false
    }
  },
  methods: {
    showPopup() {
      this.cshow = true;
    }
  },
  components: {
    tabbar
  },
}
</script>
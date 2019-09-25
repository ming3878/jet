<template>
  <div id="body">
    <div>
<van-tabs v-model="active" animated  swipeable color="#fff" background="transparent" title-active-color="#fff"  title-inactive-color="#ddd"	>
<van-tab v-for="(item,index) in Arr" :title="item.name" :key=index>
                <div v-if="index==0">我是第一个</div>
                <div v-if="index==1">我是二个</div>
                <div v-if="index==2">我是第三个</div>
            </van-tab>
</van-tabs>

    </div>
  </div>
</template>
<script>
export default {
        name: '',
        data() {
            return {
           active: 1,
                Arr: [{
                        name: "历史记录"
                    },
                    {
                        name: "搜索"
                    },
                    {
                        name: "多城市"
                    }
                ],
            }
        }
}
</script>
<style  scoped>

</style>
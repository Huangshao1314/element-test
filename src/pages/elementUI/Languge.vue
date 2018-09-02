<template>
  <div>
    <div style="margin: 20px;">
      <h1 style="font-size: 16px; text-align: center;">{{ $t('message.hello') }}</h1>
    </div>
    <el-select id="selLang" v-model="value" class="selClass">
      <el-option v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click.native="setLang(item.value)"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'Languge',
  data () {
     return {
        brands: [this.$t("brands.nike"), this.$t("brands.adi"), this.$t("brands.nb"), this.$t("brands.ln")],
        value1: null,
        value: localStorage.getItem('locale') || 'zh'
     }
  },
  computed: {
    options () {
      let temArr=[]
      let messages=this.$i18n.messages
      let i = 0
      for (let message in messages){
        temArr[i]={value:messages[message].language.code,label:messages[message].language.desc}
        ++i
      }
      return temArr
    }
  },
  methods: {
    setLang (v) {
      localStorage.setItem('locale', v)
      this.$i18n.locale = v
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

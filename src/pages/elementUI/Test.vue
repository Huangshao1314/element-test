<template>  
    <el-carousel :interval="5000" arrow="always" class="d_jump">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
          <el-col :span="24"><img :src="item.idView" class="banner_img"/></el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
		name: 'Test',
		data() {
			return {
				imgList: [{
            id: '0',
						idView: require('../../assets/imges/1.jpg')		
					},
					{
					  id: '1',
						idView: require('../../assets/imges/2.jpg')
					},
					{
					  id: '3',
						idView: require('../../assets/imges/3.jpg')
					}
				]
			}
		}
	}

</script>

<style scoped>
 img{
   width: 100%;
   height: 100%;
 }
</style>

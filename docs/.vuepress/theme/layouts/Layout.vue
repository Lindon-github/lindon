<script setup>
import {Layout} from 'vuepress-theme-plume'
</script>

<template>
     <Layout> 
        <template #page-bottom>
            <div class="custom-content">
              自定义内容
            </div>
        </template>
     </Layout>  
</template>

<style scoped>
.custom-content {
  width: 100%;
}
</style>

<template>
  <div>
     <div v-if="loading" > 
         <p>Loading... </p>
     </div>
     <div v-else>
         <p class="joke">{{ joke }}</p>
     </div>    
  </div>
</template>

<script>
export default {
    data(){
        return {
            message: "My new tab page"
        }
    }
}
</script>

<style scoped>
p{
    font-size: 20px;
}
</style>
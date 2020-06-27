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
import axios from 'axios';

export default {
    data(){
        return {
            loading: true,
            joke: "",
        }
    },

    mounted() {
        axios.get(
            "https://icanhazdadjoke.com/",
            { 'headers': {'Accept' : 'application/json'}}
        )
        .then( res => {
            this.joke = res.data.joke;
            this.loading = false;
        })
    }
}
</script>

<style scoped>
p{
    font-size: 20px;
}
</style>
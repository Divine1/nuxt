<template>
  <div class="slides">
      Slides : {{slides_val}}
      <button @click="increment()">Increment</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            slides_val : 0
        }
    },
    methods :{
        increment(){
            this.slides_val++;
            this.$emit("getresponse",this.slides_val);
        }
    }
}
</script>
<style>
.slides{
    background-color: green;
    font-weight: bold;
}
</style>

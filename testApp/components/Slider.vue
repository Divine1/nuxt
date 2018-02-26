<template>
  <div>
    <div class="slider">
        Slider     : {{slider_val}}<br />
        {{city }} <br />
        length: {{citylength}}
    </div> 
      <Slides @getresponse="catchEvent($event)"/>
  </div>
</template>

<script>
import Slides from './Slides.vue';

export default {
    components : {
        Slides
    },
    data(){
        return {
            slider_val : 0,
            city: null,
            country : null,
            citylength : 0
        }
    },
    methods:{
        catchEvent(data){
            this.slider_val = data;
            console.log("data: ",this.slider_val);
        }
    },
    created(){
        this.$store.dispatch("setACountry","pakistan");
        this.city = this.$store.getters.getCountry;
        this.citylength = this.$store.getters.getCountry.length;
    }
}
</script>

<style>
.slider{
    background-color: red;
    font-weight: bold;
}
</style>

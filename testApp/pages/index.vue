<template>
    <div>
      <div>
        indexasd: {{project}}
      </div>
      <Slider />
    </div>
</template>

<script>
import Slider from '~/components/Slider.vue';
export default {
  components: {
    Slider
  },
  asyncData (context) {

    return {
      project : "mypro"
    }
    
  }
}
</script>

<style>

</style>

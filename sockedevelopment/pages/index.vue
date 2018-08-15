<template>
  <div>
    <h2>Socket Development</h2>
    <!-- <h3>project {{project}}</h3> -->
    {{$store.state.city}}
  </div>
</template>

<script>

export default {
  asyncData({store}){
    console.log("1store ", store)
    
  }
}
</script>

<style>

</style>

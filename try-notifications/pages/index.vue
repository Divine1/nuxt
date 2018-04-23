<template>
  <div>
      notification
      <button @click="onerror()">Error</button>
      <button @click="onwarning()">Warning</button>
      <button @click="onsuccess()">Success</button>
      <button @click="oninfo()">Info</button>
      <div>
        <i class="fas fa-user"></i>
      </div>
  </div>
</template>

<script>
export default {
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'success', //success,info,warn,error

    }
  },
  methods:{
    onerror(){
      this.showLoginError({title: 'my title onerror', message: 'just an onerror', type: 'error'})
    },
    onwarning(){
      this.showLoginError({title: 'my title onwarning', message: 'just an onwarning', type: 'warn'})
    },
    onsuccess(){
      this.showLoginError({title: 'my title onsuccess', message: 'just an onsuccess', type: 'success',icon : 'fas fa-user'})
    },
    oninfo(){
      this.showLoginError({title: 'my title oninfo', message: 'just an error oninfo', type: 'info'})
    }
  }
}
</script>
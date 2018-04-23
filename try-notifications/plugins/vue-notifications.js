import Vue from 'vue';

import VueNotifications from 'vue-notifications';
import miniToastr from 'mini-toastr';

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

const iconTypes =  {
'success' : "fas fa-user"
}

miniToastr.init({types: toastTypes,icons: iconTypes})

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
Vue.use(VueNotifications, options)

/*
console.log("in plugin socket.js")
export default ({ store, redirect }) => {
    console.log("inside export ",store)
}
*/

import io from 'socket.io-client';
const socket = io('http://localhost:3000');
export default socket;
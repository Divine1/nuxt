import Vuex from 'vuex';

const createStore = () =>{

    return new Vuex.Store({
        state:{
            city : "default city"
            
        },
        mutations : {
            setCountry(state,name){
                state.country = name;
            },
            SOCKET_CONNECT(state, status) {
                console.log('SOCKET_CONNECT ',status);
            },
            SOCKET_USERMESSAGE(state,data){
                console.log("SOCKET_usermessage data ",data)
            },
            SOCKET_DISCONNECT(state, status) {
                console.log('SOCKET_DISCONNECT ',status);
            }
        },
        actions:{
            setACountry(VueContext,name){
                VueContext.commit("setCountry",name);
            }
        },
        getters: {
            getCountry(state){
                return state.country;
            }
        }
    });

};

export default createStore;
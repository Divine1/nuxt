import Vuex from 'vuex';

const createStore = () =>{

    return new Vuex.Store({
        state:{
            city : "default city",
            country : "default country"
        },
        mutations : {
            setCountry(state,name){
                state.country = name;
            },
            setCity(state,name){
                state.city = name;
            }
        },
        actions:{
            setACountry(VueContext,name){
                VueContext.commit("setCountry",name);
            },
            setACity(VueContext,name){
                VueContext.commit("setCity",name);
            }
        },
        getters: {
            getCountry(state){
                return state.country;
            },
            getCity(state){
                return state.city;
            }
        }
    });

};

export default createStore;
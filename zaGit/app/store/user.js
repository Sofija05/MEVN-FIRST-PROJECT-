export const state = () => ({
    id:"",
    name:"",
    email:"",
    password:"",
    phone:"",
    address:""

})
export const mutations = {
    setId: (state, data) => {
        state.id = data
    },
    setName: (state, data) => {
        state.name = data
    },
    setEmail: (state, data) => {
        state.email = data
    },
    setPassword: (state, data) => {
        state.password = data
    },
    setPhone: (state, data)=>{
        state.phone = data
    },
    setAddress: (state, data)=>{
        state.address = data
    }
}
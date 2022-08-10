<template >
    <div>
        <br />
        <h2>{{id? "Edit User": "Add User"}}</h2>
        <v-form  ref="form" lazy-validation>
            <v-text-field v-if="id" v-model="id" label="Id" readonly></v-text-field>
            <v-text-field v-model="name" maxlength="40" :rules="nameRules" :counter="40" label="Name (e.g. Aleksa)"
                required></v-text-field>

            <v-text-field v-model="email" maxlength="320" :rules="emailRules" :counter="320"
                :append-icon="valueEmail ? 'mdi-eye-off-outline' : 'mdi-eye'"
                @click:append="() => (valueEmail = !valueEmail)" :type="valueEmail ? 'password' : 'text'"
                label="Email (e.g. aleksa@gmail.com)" required></v-text-field>

            <v-text-field v-model="password" maxlength="128" :rules="passwordRules" :counter="128"
                :append-icon="valuePassword ? 'mdi-eye-off-outline' : 'mdi-eye'"
                @click:append="() => (valuePassword = !valuePassword)" :type="valuePassword ? 'password' : 'text'"
                label="Password (e.g. 2!Zavg8911)" required></v-text-field>

            <v-text-field v-model="phone" maxlength="10" :rules="phoneRules" :counter="10"
                :append-icon="valuePhone ? 'mdi-eye-off-outline' : 'mdi-eye'"
                @click:append="() => (valuePhone= !valuePhone)" :type="valuePhone ? 'password' : 'text'"
                label="Phone (e.g. 0645481993)" required></v-text-field>

            <v-text-field v-model="address" maxlength="40" :rules="addressRules" :counter="40"
                label="Address (e.g. Diznijeva 31)" required></v-text-field>
            <v-btn @click="submit({ id, name, email, password, phone, address})">{{
                id ? "Edit" : "Submit"
                }}</v-btn>
            <v-btn class="ml-3" @click="reset">Reset</v-btn>
            <v-snackbar transition="v-snack-transition" v-model="snackbar" outlined :elevation="20" :multi-line="true" :vertical="true" light>
                <v-icon color="red" large>mdi-alert-decagram</v-icon>
                {{text}}

                <template v-slot:action="{ attrs }">
                    <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </v-form>
    </div>
</template>

<script>
import {nameRules} from '../rules'
import {emailRules}  from '../rules'
import {passwordRules} from '../rules'
import {phoneRules} from '../rules'
import {addressRules} from '../rules'


export default {
    data: () =>({
        valuePassword: String,
        valueEmail:String,
        valuePhone:String,
        snackbar: false,
        text: "Email or Phone already exist in database"
    }),
    computed:{
        nameRules,
        emailRules,
        passwordRules,
        phoneRules,
        addressRules,
        id:{
            get(){
                return this.$store.state.user.id;
            },
            set(value){
                this.$store.commit("user/setId", value);
            },
        },
        name:{
            get(){
                return this.$store.state.user.name;
            },
            set(value){
                this.$store.commit("user/setName", value);
            },
        },
        email:{
            get(){
                return this.$store.state.user.email;
            },
            set(value){
                this.$store.commit("user/setEmail", value);
            },
        },
        password:{
            get(){
                return this.$store.state.user.password;
            },
            set(value){
                this.$store.commit("user/setPassword", value);
            },
        },
        phone:{
            get(){
                return this.$store.state.user.phone;
            },
            set(value){
                this.$store.commit("user/setPhone", value);
            },
        },
        address:{
            get(){
                return this.$store.state.user.address;
            },
            set(value){
                this.$store.commit("user/setAddress", value);
            },
        },
    },
    methods: {
        async submit(user){
            if(this.$refs.form.validate()){
                const users = this.$store.state.users.data
                const checkSameEmail = await users.find(user => user.email === this.email)
                const checkSamePhone = await users.find(user => user.phone === this.phone)
                
            if(user.id){
                
                if((checkSameEmail != undefined) || (checkSamePhone != undefined)){
                    try{
                    if(checkSameEmail._id != this.id){
                        this.snackbar = true
                        return
                    }}catch(e){}

                    try{
                    if(checkSamePhone._id != this.id){
                        this.snackbar = true
                        return
                    }} catch(e){
                    }
                }
                
                await this.$axios.put("http://localhost:4000/users/" + user.id, {
                name:user.name,
                email: user.email,
                password: user.password,
                phone: user.phone,
                address: user.address});
            } else {
                if((checkSameEmail != undefined) || (checkSamePhone != undefined)){
                    this.snackbar = true
                    return
                }
                
                await this.$axios.post("http://localhost:4000/users/", {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    address: user.address
                });
            }
            this.resetUser({id:0, name:"", email:"", password:"", phone:"", address:""});
            this.$store.commit(
                "users/storeData",
                (await this.$axios.get("http://localhost:4000/users")).data
            );
            }
            else{return}
        },
        reset() {
        this.$refs.form.reset()
      },
        resetUser(user){
            this.$store.commit("user/setId", user.id);
            this.$store.commit("user/setName", user.name);
            this.$store.commit("user/setEmail", user.email);
            this.$store.commit("user/setPassword", user.password);
            this.$store.commit("user/setPhone", user.phone);
            this.$store.commit("user/setAddress", user.address);
        },
    }, 
};
</script>

<style>
</style>
 
 

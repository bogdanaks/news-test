<template>
    <div class="container loginContainer">
        <div class="row">
            <form class="col s4 offset-s4" @submit.prevent="submitHandler">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="username" type="text" class="validate" v-model="user.username">
                        <label for="username">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" class="validate"  v-model="user.password">
                    <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <button type="submit" class="waves-effect waves-light btn right">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        submitHandler: function() {
            this.$store.dispatch('checkAuth', this.user).then(() => {
                this.$router.push('/profile')
            })
        },
    }
}
</script>

<style>
    .loginContainer {
        padding-top: 15%;
    }
</style>
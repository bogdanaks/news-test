<template>
    <nav class="teal darken-1">
        <div class="nav-wrapper container">
            <router-link to='/' class="brand-logo">News</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link to="/news" active-class="active" tag="li" exact><a>News</a></router-link>
                <router-link to="/profile" active-class="active" tag="li" exact><a>Profile</a></router-link>
                <li @click="exitHandler" v-if="auth"><a>Exit</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isAuthenticated']),
        auth: function() {
            return this.isAuthenticated === 'true' || this.isAuthenticated === true
        }
    },
    methods: {
        exitHandler: function() {
            this.$store.dispatch('setAuth', false)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>
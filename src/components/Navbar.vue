<template>
    <nav class="teal darken-1">
        <div class="nav-wrapper container">
            <router-link to='/' class="brand-logo">News</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link to="/news" active-class="active" tag="li" exact><a>News</a></router-link>
                <router-link to="/profile" active-class="active" tag="li" exact><a>Profile</a></router-link>
                <li @click="exitHandler" v-if="this.$store.getters.isAuthenticated === 'true'"><a>Exit</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
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
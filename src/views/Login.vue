<template>
    <div class="container loginContainer">
        <div class="row">
            <form class="col s4 offset-s4">
            <div class="row">
                <div class="input-field col s12">
                    <input id="username" type="text" class="validate">
                    <label for="username">Username</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                <input id="password" type="password" class="validate">
                <label for="password">Password</label>
                </div>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .loginContainer {
        padding-top: 15%;
    }
</style>
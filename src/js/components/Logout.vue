<template>
    <h3 class="col-12 justify-content-center text-center">Logout with: {{second}} sec.</h3>
</template>

<script>
    import { logout } from "./../actions/auth.js";
    export default {
        name: "Logout",
        data() {
            return {
                second: 3
            }
        },
        created() {
            const self = this;
            this.timerId = setTimeout(function redirect() {
                if(!self.second--) {
                    self.$redux.dispatch(logout);
                    self.$router.push('/');
                } else {
                    self.timerId = setTimeout(redirect, 1000);
                }
            }, 1000);
        },
        destroyed() {
            clearTimeout(this.timerId);
        }
    }
</script>
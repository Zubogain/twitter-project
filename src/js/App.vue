<template>
    <main class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/" class="nav-link">Главная</router-link></li>
                    <li class="nav-item" v-if="!auth"><router-link to="/login" class="nav-link">Войти</router-link></li>
                    <li class="nav-item" v-else><router-link to="/logout" class="nav-link">Выйти</router-link></li>
                </ul>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'App',
        data() {
          return {
              auth: false
          }
        },
        created() {
            const auth = this.$redux.getState().auth;
            (auth != null)? this.auth = true: this.auth = false;
            this.unsubscribe = this.$redux.subscribe(() => {
                const auth = this.$redux.getState().auth;
                (auth != null)? this.auth = true: this.auth = false;
            });
        },
        destroyed() {
            this.unsubscribe();
        }
    }
</script>
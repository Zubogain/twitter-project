<template>
    <form @submit="validateForm">
        <h4 v-if="error" style="color: red"> {{error}} </h4>
        <div class="form-group">
            <label for="exampleInputEmail1">Адрес эл. почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Регистрация</button>
    </form>
</template>

<script>
    import { signUp } from './../actions/auth.js';
    export default {
        name: "Signup",
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            validateForm(e) {
                e.preventDefault();
                if(this.email.length && this.password.length) {
                    this.$redux.dispatch(signUp(this.email, this.password));
                }
            }
        },
        created() {
            this.unsubscribe = this.$redux.subscribe(() => {
                const state = this.$redux.getState().auth;
                if(state != null) {
                    if(!('errors' in state)) {
                        this.$router.push('/');
                    } else {
                        switch (state.message) {
                            case 'EMAIL_EXISTS':
                                this.error = 'Адрес эл. почты занят!';
                                break;
                            case 'WEAK_PASSWORD : Password should be at least 6 characters':
                                this.error = 'Пароль должен быть не менее 6 символов!';
                                break;
                        }
                    }
                }
            });
        },
        destroyed() {
            this.unsubscribe();
        }
    }
</script>
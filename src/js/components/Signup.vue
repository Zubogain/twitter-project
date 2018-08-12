<template>
    <form @submit="validateForm" class="content-wrap col-12">
        <h6 v-if="error" class="alert alert-danger"> {{ error }} </h6>
        <div class="form-group">
            <label for="exampleInputEmail1">Адрес эл. почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-custom-green">Регистрация</button>
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
                            default:
                                this.error = 'Ошибка сети!';
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
<template>
    <div class="col-6 offset-3">
        <h3>Мой профиль</h3>
        <form @submit="formValidate">
            <h5 style="color: red" v-if="error">{{ error }}</h5>
            <h5 style="color: red" v-if="success">{{ success }}</h5>
            <input type="text" class="form-control" placeholder="Имя" v-model="user.name">
            <input type="password" class="form-control" placeholder="Пароль" v-model="user.password">
            <input class="btn btn-primary" type="submit" value="Сохранить">
        </form>
    </div>
</template>

<script>
    import { updateProfile } from './../actions/profile.js';
    import { passwordChange } from './../actions/auth.js';
    export default {
        name: "Profile",
        data() {
            return {
                user: {
                    name: '',
                    password: ''
                },
                error: '',
                success: ''
            }
        },
        methods: {
            formValidate(e) {
                e.preventDefault();
                const state = this.$redux.getState();
                this.user.name = this.user.name.trim();
                if (this.user.name && state.profile.name !== this.user.name) {
                    this.$redux.dispatch(updateProfile(this.user.name));
                }
                if (this.user.password.length > 5) {
                    this.$redux.dispatch(passwordChange(this.user.password));
                }
            }
        }
    }
</script>
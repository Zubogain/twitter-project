<template>
    <div v-if="state.error">
        <h3 class="col-12 text-center">{{ state.error }}</h3>
    </div>
    <div v-else>
        <form @submit="validateForm">
            <textarea cols="30" rows="3" class="form-control col-12" v-model="post.title"></textarea>
            <input class="btn btn-primary col-12" type="submit" value="Добавить">
        </form>
        <List
                v-bind:list="state.list"
        ></List>
    </div>
</template>

<script>
    import List from './List.vue';
    import * as actions from './../actions/posts.js';
    export default {
        name: "Main",
        components: {
            List
        },
        data() {
          return {
              post: {},
              state: this.$redux.getState().posts
          }
        },
        methods: {
            validateForm(e) {
                e.preventDefault();
                if(this.post.title && (this.post.title = this.post.title.trim())) {
                    this.$redux.dispatch(actions.insertPost(this.post));
                    this.post = {};
                }
            }
        },
        created() {
            this.unsubscribe = this.$redux.subscribe(() => {
                this.state = this.$redux.getState().posts;
            });

        }, destroyed() {
            this.unsubscribe();
        }
    }
</script>
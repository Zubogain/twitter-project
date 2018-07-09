<template>
    <div>
        <form @submit="validateForm">
            <textarea cols="30" rows="3" class="form-control col-12" v-model="post.title"></textarea>
            <input class="btn btn-primary col-12" type="submit" value="Добавить">
        </form>
        <List
            v-bind:list="posts"
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
              posts: []
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
            this.posts = this.$redux.getState().posts;
            this.unsubscribe = this.$redux.subscribe(() => {
                this.posts = this.$redux.getState().posts;
            });
        }, destroyed() {
            this.unsubscribe();
        }
    }
</script>
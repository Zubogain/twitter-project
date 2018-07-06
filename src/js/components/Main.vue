<template>
    <div>
        <form @submit="validateForm">
            <textarea cols="30" rows="10" class="form-control col-12" v-model="post.title"></textarea>
            <input class="btn btn-primary col-12" type="submit" value="Добавить">
        </form>
        <List></List>
    </div>
</template>

<script>
    import List from './List.vue';
    import { insertPost } from './../actions/posts.js'
    export default {
        name: "Main",
        components: {
            List
        },
        data() {
          return {
              post: {}
          }
        },
        methods: {
            validateForm(e) {
                e.preventDefault();
                if(this.post.title && (this.post.title = this.post.title.trim())) {
                    this.$redux.dispatch(insertPost(Object.assign({}, this.post)));
                    this.post = {};
                }
            }
        }
    }
</script>
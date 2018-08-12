<template>
    <div v-if="state.error">
        <h3 class="col-12 text-center">{{ state.error }}</h3>
    </div>
    <div v-else class="row">
        <form @submit="validateForm" class="content-wrap col-12">
            <div class="form-group col-12">
                <input type="text" class="form-control col-12" placeholder="Post title..." v-model="post.title" required>
                <textarea cols="30" rows="3" class="form-control col-12" placeholder="Text..." v-model="post.body" required></textarea>
                <input class="btn btn-custom-green col-12" type="submit" value="Добавить">
            </div>
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
                if(this.post.title && (this.post.title = this.post.title.trim()) && this.post.body && (this.post.body = this.post.body.trim())) {
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
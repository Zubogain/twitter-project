<template>
    <table class="table table-striped" v-else>
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">User</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
        </tr>
        </thead>
        <ListItem
                v-for="item in list"
                v-bind:item="item"
                v-bind:list="list"
                v-bind:key="item.id"
        ></ListItem>
        <tbody>

        </tbody>
    </table>
</template>

<script>
    import ListItem from './ListItem.vue';
    import { getPosts } from './../actions/posts.js'
    export default {
        name: "List",
        components: {
            ListItem
        },
        data() {
            return {
                list: this.onGetPosts(),
                unsubscribe: this.$redux.subscribe(() => {
                    this.list = this.$redux.getState().posts;
                })
            }
        },
        methods: {
            onGetPosts() {
                this.$redux.dispatch(getPosts());
            }
        },
        created() {
            this.list = this.$redux.getState().posts;
        },
        destroyed() {
            this.unsubscribe();
        }
    }
</script>
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
                v-bind:key="item.id"
        ></ListItem>
        <tbody>

        </tbody>
    </table>
</template>

<script>
    import ListItem from './ListItem.vue';
    export default {
        name: "List",
        props: ['list'],
        components: {
            ListItem
        }
    }
</script>
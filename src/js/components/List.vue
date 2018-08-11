<template>
    <div class="container">
        <div class="row">
            <ListItem
                v-for="item in list"
                v-bind:item="item"
                v-bind:key="item.id"
            ></ListItem>
        </div>
    </div>
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

<style>
    body {
        background-color: #EDF2F6;
    }
    a, a:focus, a:active, a:hover {
        color: inherit;
        text-decoration: none;
        outline: none;
    }
</style>
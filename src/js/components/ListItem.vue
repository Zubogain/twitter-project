<template>
    <tr>
        <td>{{ item.id }}</td>
        <td>{{ item.userId }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
    </tr>
</template>

<script>
    export default {
        name: "ListItem",
        props: ['item']
    }
</script>
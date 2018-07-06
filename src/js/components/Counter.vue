<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <button @click="actions.increment">+</button>
        <button @click="actions.decrement">-</button>
    </div>
</template>

<script>
    import * as Actions from './../actions/counter.js';
    import { bindActionCreators } from 'redux';
    export default {
        name: "Counter",
        data() {
          return {
              actions: bindActionCreators(Actions, this.$redux.dispatch),
              count: this.$redux.getState().counter
          }
        },
        created() {
            this.unsubscribe = this.$redux.subscribe(() => {
                this.count = this.$redux.getState().counter;
                console.log(this.$redux.getState());
            });
        },
        destroyed() {
            this.unsubscribe();
        }
    }
</script>
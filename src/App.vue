<template>
    <div class="appContainer">
        <h1>{{heading}}</h1>

        <Landing /> 
    </div>
</template>

<script>
import Landing from './pages/Landing.vue';

export default {
    data() {
        return {
            heading: 'Vue app container'
        }
    },
    components: {
        Landing
    }
}
</script>

<style>
    .appContainer {
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: center;
    }
</style>   
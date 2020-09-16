<template>
    <div class="appContainer">
        <Header></Header>
        <Logs></Logs>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Logs from "./pages/Logs.vue";

export default {
    data() {
        return {
            heading: "Vue app container",
        };
    },
    components: {
        Header,
        Logs,
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

body {
    font-size: 16px;
}

.appContainer {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
}
</style>   
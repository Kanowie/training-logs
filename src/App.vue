<template>
    <div class="appContainer">
        <Header :headerTitle="heading"></Header>
        <Logs></Logs>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Logs from "@/pages/Logs.vue";

export default {
    data() {
        return {
            heading: "Training Logs",
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
</style>   
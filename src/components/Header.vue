<template>
    <div class="header">
        <div class="inner-header">
            <h1>{{ headerTitle }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "LogsHeader",
    props: ["headerTitle"],
};
</script>

<style>
.header {
    width: 100%;
    height: 130px;
    display: flex;
    background-color: black;
}

.inner-header {
    width: 80%;
    height: auto;
    margin: 30px auto;
}

.inner-header h1 {
    font-size: 5rem;
    color: white;
    text-align: center;
    color: aqua;
}
</style>
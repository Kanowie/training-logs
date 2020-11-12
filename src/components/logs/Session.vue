<template>
    <div class="sessionComponent">
        <h2>{{ sessionType }}</h2>
        <div class="exerciseList">
            <ul>
                <li v-for="(exercise, index) in exercises" :key="index">
                    {{ exercise }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Session",
    props: ["sessionType", "exercises"],
};
</script>

<style>
.sessionComponent {
    width: 15%;
    height: auto;
    font-size: 1.6rem;
    margin: 32px auto;
    flex-wrap: wrap;
}

.exerciseList {
    border: 2px solid black;
    text-decoration-style: circle;
    padding: 8px 32px;
}
</style>
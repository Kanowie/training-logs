<template>
    <div class="container">
        <div
            class="logs-container"
            v-for="trainingSession in trainingSessions"
            :key="trainingSession.id"
        >
            <h2>{{ trainingSession.ssesionType }}</h2>
            <div class="logs-list">
                <ul>
                    <li v-for="(exercise, index) in trainingSession.sessionExercises" :key="index">{{ exercise  }}</li>
                </ul>
            </div>
        </div>
        <div class="logs-container">
            <h2>Thursday-Fluff</h2>
            <div class="logs-list">
                <ul>
                    <li>Push press</li>
                    <li>Incline Bench</li>
                    <li>Lat pull downs</li>
                    <li>Incline rows</li>
                    <li>Face pulls</li>
                    <li>Banded push downs</li>
                </ul>
            </div>
        </div>
        <div class="logs-container">
            <h2>Saturday</h2>
            <div class="logs-list">
                <ul>
                    <li>Push press</li>
                    <li>Incline Bench</li>
                    <li>Lat pull downs</li>
                    <li>Incline rows</li>
                    <li>Face pulls</li>
                    <li>Banded push downs</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "logs",
    data: function () {
        return {
            trainingSessions: [
                {
                    id: 0,
                    ssesionType: "Monday-Upper",
                    sessionExercises: [
                        "Strict Press",
                        "Incline Bench Press",
                        "Lat Pull Downs",
                        "Banded Face Pulls",
                        "Banded Push Downs",
                        "One Arm Row",
                        "3-way Raise",
                    ],
                },
                {
                    id: 1,
                    ssesionType: "Tuesday-Upper",
                    sessionExercises: [
                        "Squat",
                        "Squat",
                        "Squat",
                        "Squat",
                        "Squat",
                        "Squat",
                        "Squat",
                    ],
                },
            ],
        };
    },
};
</script>

<style>
.container {
    width: 100%;
    height: 1800px;
    display: flex;
}

.logs-container {
    width: 15%;
    height: auto;
    font-size: 1.6rem;
    margin: 32px auto;
    flex-wrap: wrap;
}

.logs-list {
    border: 2px solid black;
    text-decoration-style: circle;
    padding: 8px 32px;
}
</style>
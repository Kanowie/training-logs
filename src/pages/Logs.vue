<template>
    <div class="logsComponent">
        <template v-for="trainingSession in trainingSessions">
            <Session
                :sessionType="trainingSession.sessionType"
                :exercises="trainingSession.sessionExercises"
                :key="trainingSession.id"
            />
        </template>
    </div>
</template>

<script>
import Session from "@/components/logs/Session.vue";
import { trainingLogsMock } from "../../mock_data/training-logs";

export default {
    name: "Logs",
    components: {
        Session,
    },
    data: function () {
        return {
            trainingSessions: [],
        };
    },
    created: function () {
        this.trainingSessions = trainingLogsMock;
    },
};
</script>

<style>
.logsComponent {
    width: 100%;
    height: 1800px;
    display: flex;
}
</style>
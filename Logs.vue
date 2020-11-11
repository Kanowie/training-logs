<template>
    <div class="container">
        <div class="logs-container">
            <h2>Monday-Upper</h2>
            <div class="logs-list" id='upperData'>
                <ul>
                    <li v-for="session in trainingSessions" :key="session.id"> {{session.monday}} </li>
                </ul>
            </div>
        </div>
        
        <div class="logs-container">
            <h2>Tuesday-Lower</h2>
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
       let itemDataUpper = new Vue({
        el: '#upperData',
        mondayData() {
            return {
            trainingSessions: [
                     {monday: 'Strict Press'},
                     {monday: 'Incline Bench Press'},
                     {monday: 'Lat Pull Downs'},
                     {monday: 'Banded Face Pulls'},
                     {monday: 'Banded Push Downs'},
                     {monday: 'One Arm Row'},
                     {monday: '3-way Raise'},
                         ] 
            }
         }
    });
    </script>
    
<script>
export default {
    name: "logs",
    data() {
        return {
            title: "Landing Page",
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
    margin:  32px auto;
    flex-wrap: wrap;

}

.logs-list {
    border: 2px solid black;
    text-decoration-style: circle;
    padding: 8px 32px;
}
</style>

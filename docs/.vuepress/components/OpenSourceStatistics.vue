<template>
    <div>
        <div>
            <Statistics :statistics="statistics" />
        </div>
    </div>
</template>

<script>
export default {

    name: 'OpenSourceStatistics',

    data() {
        return {
            statistics:
                require('../statistics.js'),
        };
    }
}
</script>
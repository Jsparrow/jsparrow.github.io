<template>
    <div>
        <div>
            <Statistics :statistics="statistics" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            statistics:
                require('../mdm-statistics.js'),
        };
    }
}
</script>
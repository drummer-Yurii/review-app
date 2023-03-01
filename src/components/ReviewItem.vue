<template>
    <card>
        <button class="close">
            <i class="fas fa-times"></i>
        </button>
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <div class="num-display">
            {{ item.rating }}
        </div>
        <div class="text-display">
            {{ item.text }}
        </div>
    </card>
</template>

<script setup>
import Card from "./shared/Card.vue";
defineProps({
    item: {
        type: Object,
    },
});
</script>

<style scoped></style>
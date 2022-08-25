<script setup>
import { useBookingStore } from '../stores/booking';
import { ref, onMounted } from 'vue';

const bookingStore = useBookingStore();
const passengers = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  passengers.value = await bookingStore.fetchPassengers();
  isLoading.value = false;
  return { passengers };
});
</script>

<template>
  <div class="booking">
    <h1>Passengers</h1>
  </div>
  <p v-if="isLoading">Loading...</p>
  <div v-else>
    <p>There are {{ passengers.length }} passenger(s) waiting.</p>
    <ol>
      <li
        v-for="passenger in passengers"
        :key="passenger.id"
        class="passengers"
      >
        <a :href="`/passengers/${passenger._id}`">{{ passenger.name }}</a>
      </li>
    </ol>
  </div>
</template>

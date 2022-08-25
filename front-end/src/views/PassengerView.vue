<script setup>
import { useBookingStore } from '../stores/booking';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const bookingStore = useBookingStore();
const isLoading = ref(true);
const passenger = ref({});
const drivers = ref([]);
const destination = ref('');
const route = useRoute();

onMounted(async () => {
  passenger.value = await bookingStore.fetchPassenger(route.params.passengerId);
  drivers.value = await bookingStore.fetchDrivers();
  isLoading.value = false;
});

async function bookDriverAndUpdatePassenger({
  driverId,
  passengerId,
  origin,
  destination,
}) {
  await bookingStore.bookDriver({ driverId, passengerId, origin, destination });
  passenger.value = await bookingStore.fetchPassenger(passengerId);
}
</script>

<template>
  <div class="detail">
    <main>
      <p v-if="isLoading">Loading...</p>
      <div v-else>
        <h1>Passenger Detail</h1>
        <br />
        <h2>Passenger Name: {{ passenger.name }}</h2>
        <h2>Booking History</h2>
        <div v-if="passenger.bookings.length">
          <ol>
            <li v-for="booking in passenger.bookings" :key="booking.id">
              From {{ booking.origin }} to {{ booking.destination }} with
              {{ booking.driver.name }}
            </li>
          </ol>
        </div>
        <p v-else>No Bookings yet.</p>
        <br />
        <h2>Create new booking</h2>
        <p>Destination: <input v-model="destination" /></p>

        <div v-if="drivers.length">
          <h3>Drivers</h3>
          <ol>
            <li v-for="driver in drivers" :key="driver.id">
              {{ driver.name }} is waiting at {{ driver.location }}
              <button
                @click="
                  bookDriverAndUpdatePassenger({
                    driverId: driver._id,
                    passengerId: passenger._id,
                    origin: passenger.location,
                    destination,
                  })
                "
                class="book"
              >
                Book driver
              </button>
            </li>
          </ol>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .detail {
    display: flex;
    align-items: center;
  }
}
</style>

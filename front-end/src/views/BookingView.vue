<script setup>
import BookingApp from '@/components/BookingApp.vue';
</script>

<template>
  <div class="booking">
    <main>
      <h1>This is booking page.</h1>
      <BookingApp />
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .booking {
    display: flex;
    align-items: center;
  }
}
</style>

// GuestCount.vue
<template>
  <div>
    <p>Eyes : {{ guestCount }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const guestCount = ref(0);

async function fetchGuestCount() {
  const response = await fetch('/api/onlineUsers'); // replace with your API endpoint
  const data = await response.json();
  guestCount.value = data.guestCount;
}

onMounted(fetchGuestCount);
</script>

<script setup>
useSeoMeta({
  ogTitle: "Home",
  ogDescription: "DOTstream - A streaming service ",
  ogUrl: useRoute().fullPath,
  twitterTitle: "Home",
  twitterDescription: "DOTstream - A streaming service ",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Home",
});
</script>

<template>
  <PgCompsLandingPage />
</template> 

<style></style>
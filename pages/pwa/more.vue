<script setup>

useSeoMeta({
  ogTitle: "About",
  ogDescription: "About DOTstream...",
  ogImage: "logo.png",
  ogUrl: "[og:url]",
  twitterTitle: "About",
  twitterDescription: "About DOTstream...",
  twitterImage: "logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "About",
});


</script>
<template>
  <v-container>
    <div style="height: fit-content; display: grid; place-items: center; background-color: #212121; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      <div class="pa-5" style="background-color: #212121; ">
<header class="banner">
      <img src="/logo2.png" alt="logo" class="banner-image" />
      <p>
          i will think about something to write or you can send me something to write ... 
        </p>
</header>

        <div class="mt-2">
</div>
        <div class="my-">
You can consider donating us to keep it alive! <br>

          discord @is_coffee
</div>
      </div>
    </div>
  <news/>


  </v-container>

</template>
<style scoped>
.banner {
  padding: 0px; /* Adjust the padding as needed */
  text-align: center; /* Center the content */
}

.banner-image {
  max-height: 150px; /* Set your preferred height */
  max-width: 100%; /* Ensure the image does not exceed its container width */
  margin-bottom: 10px; /* Add some space below the image */
}
</style>

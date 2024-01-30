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
    <div style="height: fit-content; display: grid; place-items: center">
      <div class="pa-5" style="background-color: #212121">
        <h1><img src="/logo.png" alt="loho" height="50" /></h1>
        <p>
          i will think about something to write or you can send me something to write ... 
        </p>
        <div class="mt-2">
         
        </div>
        <div class="my-5">
          <h1>Donation</h1>
          We do not use ADs and rely on donation to keep the website running forever. 
          You can consider donating us to keep it alive! <br>
         
        </div>
      </div>
    </div>
  </v-container>
</template>

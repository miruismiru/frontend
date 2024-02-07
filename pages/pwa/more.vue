<script setup>
import { useStorage } from "@vueuse/core";

const history_state = useStorage("site-watch", {});

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
    <ClientOnly>
  <div v-if="history_state?.latest_anime_watched">
    <template v-for="(anime, index) in history_state.all_anime_watched" :key="index">

      <v-alert
        class="mt-4"
        icon="mdi-history"
        :title="`${anime.title}`"
        :text="anime.description"
        style="background-color: rgba(27, 27, 27, 0.712);"
      >
        <template #prepend>
          <v-img
            :width="100"
            cover
            :src="anime.imgsrc"
            style="border-radius: 8px; box-shadow: 0 2px 4px rgb(43, 43, 43);"
          ></v-img>
        </template>
        <template #default>
          <br />
          <v-chip
      class="ma-2"
      color="red"
      variant="outlined"
    >
   Episode {{ anime.curr_ep }} / {{ anime.type }}
      <v-icon end icon="mdi-video-check-outline"></v-icon>
    </v-chip>
    <v-chip
      class="ma-2"
      color="red"
      variant="outlined"
    >
   {{anime.isDub ? 'Dub ' : 'Sub '}}
      <v-icon end icon="mdi-subtitles-outline"></v-icon>
    </v-chip>
          <v-btn
            class="my-2"
            color="#e5383b"
            :to="`/pwa/watch/${anime.id}-${anime.ep_id}`"
            prepend-icon="mdi-play"
          >
            Resume
          </v-btn>
        </template>
      </v-alert>
    </template>
  </div>
</ClientOnly>




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

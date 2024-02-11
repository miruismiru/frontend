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
<template >

  <v-container>
    <div  class="bgc" style="height: fit-content; display: grid; place-items: center; background-color: #212121; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);border-radius: 22px">
      <div  class="pa-5 bgc" style="background-color: #212121; ">
<header class="banner">
      <img src="/logo2.png" alt="logo" class="banner-image" />
      <p>
          i will think about something to write or you can send me something to write ... 
          
        </p>
        <a href="https://discord.com/users/1155782105352114236" target="_blank">
  <v-btn  variant="outlined"
          class="my-2"
          color="#e5383b"
          prepend-icon="mdi-at"
  >
    is_coffee
  </v-btn>
</a>

<v-btn
    variant="outlined"
    class="my-2"
    color="#e5383b"
    prepend-icon="mdi-bank"
    @click="handleButtonClick"
  >
    7770000019199
  </v-btn>

  <p>Consider donating us to keep it alive!</p>
  <v-snackbar
      v-model="snackbar"
      :timeout="3000" 
      color="success"
      variant="outlined"
    >
      Number copied to clipboard !
    </v-snackbar>
</header>

        <div class="mt-2">
</div>
      
      </div>
    </div>
    <ClientOnly>
  <div v-if="history_state?.latest_anime_watched">
    <template v-for="(anime, index) in history_state.all_anime_watched" :key="index">

      <v-alert
        class="mt-4 bgc"
        icon="mdi-history"
        :title="`${anime.title}`"
        style="background-color: rgba(27, 27, 27, 0.712); border-radius: 22px"
      >
        <template #prepend>
          <v-img
            :width="100"
            cover
            :src="anime.imgsrc"
            style="border-radius: 8px; "
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
          <v-btn  variant="outlined"
            class="my-2"
            color="#e5383b"
           
            :to="`/pwa/watch/${anime.id}-${anime.ep_id}`"
            prepend-icon="mdi-play"
          >
            Play
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

.bgc {
  background-image: url('/black.png');
  background-size: cover; /* This ensures the background image covers the entire container */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */

}
</style>

<script>
export default {
  data() {
    return {
      snackbar: false,  // Initialize snackbar state
    };
  },
  methods: {
    handleButtonClick() {
      const textToCopy = "is_coffee";
      navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Text copied to clipboard:", textToCopy);
        this.snackbar = true;  // Show the snackbar
        // You can add any additional logic after the text is copied
      }).catch((error) => {
        console.error("Unable to copy text to clipboard", error);
      });
    },
  },
};
</script>
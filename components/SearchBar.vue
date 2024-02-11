<script setup>
import debounce from "lodash.debounce";
import axios from "axios";

const env = useRuntimeConfig();
const searchResults = ref();
const search = ref("");

const debouncedSearch = debounce(async (query) => {
  const { data } = await axios.get(
    `${env.public.API_URL}/api/${env.public.version}/search?q=${query}&limit=5`
  );
  searchResults.value = data;
}, 500);
</script>
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
<ClientOnly>
  <v-menu
    close-on-content-click
    no-click-animation
    origin="auto"
    location="bottom"
  >
    <template #activator="{ props }">
      <v-text-field
        v-model="search"
        variant="outlined"
        color="#e5383b"
        label="search"
        flat
        single-line
        hide-details
        prepend-inner-icon="mdi-map-search"
        v-bind="props"
        @update:model-value="debouncedSearch(search)"
      />
    </template>
    
      <v-card>
        <v-list lines="two">
          <v-list-item title="" />
          <v-divider />
          <v-list-item
            v-for="item in searchResults?.results"
            :key="item.id"
            :to="
              /\/pwa\.*/.test(useRoute().path)
                ? '/pwa/anime/' + item.id
                : '/anime/' + item.id
            "
            class="bgc"
          >
            <template #prepend>
              <img
                v-if="item.coverImage.medium"
                class="ma-2"
                :src="item.coverImage.medium"
                :alt="item.id + '_img'"
                style="border-radius: 4px; width: 60px; height: 10%"
              />
            </template>
            <v-list-item-title>
              {{ item.title.english }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Episode {{ item.episodes }} /
              {{
                item.status === "FINISHED"
                  ? "Finished"
                  : item?.status === "RELEASING"
                  ? "Currently Releasing"
                  : item?.status === "NOT_YET_RELEASED"
                  ? "Not Released"
                  : item?.status === "CANCELLED"
                  ? "Cancelled"
                  : "No data"
              }}
            </v-list-item-subtitle>
            <template #append>
              <v-icon color="yellow">
mdi-star
</v-icon>
              {{ item.averageScore / 10 }}
            </template>
          </v-list-item>
          <v-list-item
            v-if="searchResults?.results.length > 0"
            :to="'/search?q=' + search"
          >
          </v-list-item>
        </v-list>
      </v-card> 
    </v-menu>
  </ClientOnly>
</template>
<style>
.bgc {
  background-image: url('/black.png');
  background-size: cover; /* This ensures the background image covers the entire container */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */

}</style>
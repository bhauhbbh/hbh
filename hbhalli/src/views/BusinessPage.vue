<template>
  <div>
    <v-carousel
      cycle
      height="200"
      :lg-height="auto"
      hide-delimiter-background
      show-arrows="hover"
    >
      <!-- Slides with images -->
      <v-carousel-item v-for="(imageUrl, index) in imageUrls" :key="index">
        <v-img :src="imageUrl" class="carousel-image"></v-img>
      </v-carousel-item>
    </v-carousel>

    <v-container class="pa-0">
      <v-row>
        <!-- Left Column -->
        <v-col cols="12" md="6">
          <v-card class="city-news-card" flat>
            <v-card-title class="text-h5">Notifications</v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item v-for="(news, index) in cityNews" :key="index">
                  <v-list-item-subtitle>{{ news.title }}</v-list-item-subtitle>
                  <v-list-item-subtitle>
                    Posted {{ news.posted }} ago
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Right Column -->
        <v-col cols="12" md="6">
          <v-row class="mx-auto mt-2">
            <!-- First Row in Right Column -->
            <v-col cols="12">
              <v-card
                class="pa-4 mx-lg-auto"
                color="secondary"
                width="auto"
                flat
              >
                <v-card-text>
                  Adjust screen size to see spacing changes
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mx-auto">
            <!-- Second Row in Right Column -->
            <v-col cols="12">
              <v-card class="bg-blue-lighten-4 pa-4 pa-md-4 mx-lg-auto" flat>
                <h2>Second Row in Right Column</h2>
                <p>Sample content in the second row of the right column.</p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-main>
      <v-sheet class="mx-auto" max-width="auto">
        <v-slide-group show-arrows>
          <v-slide-group-item v-for="(item, index) in items" :key="index">
            <v-btn
              size="x-large"
              rounded="xl"
              flat
              class="ma-2 rounded-xl text-body-2"
              color="primary"
              :color="isSelected ? 'primary' : undefined"
              @click="goToPage(index + 1)"
            >
              Trending
              <v-icon end icon="mdi-trending-up"></v-icon>
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-main>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      buttonList: [
        { icon: 'mdi-home', text: 'Home' },
        { icon: 'mdi-account', text: 'Profile' },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-email', text: 'Email' },
        { icon: 'mdi-bell', text: 'Notifications' },
        // Add more button items with icons as needed
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      pageNames: [
        'Trends',
        'Rents',
        'Services',
        // Add more page names here as needed
      ],

      cityNews: [
        { title: 'ವಿದ್ಯುತ್‌ ವ್ಯತ್ಯಯ', posted: 'October 1, 2023' },
        { title: 'ವಿದ್ಯುತ್‌ ವ್ಯತ್ಯಯ', posted: 'October 1, 2023' },
        { title: 'ವಿದ್ಯುತ್‌ ವ್ಯತ್ಯಯ', posted: 'October 1, 2023' },
        // Add more news items as needed
      ],
      imageUrls: [
        'https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/de6f54d63f6733ff.jpg',
        'https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/de6f54d63f6733ff.jpg',
        'https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/de6f54d63f6733ff.jpg',
        // Add more image URLs as needed
      ],
    };
  },
  methods: {
    goToPage(n) {
      // Use Vue Router to navigate to the corresponding page
      this.$router.push({ name: 'page', params: { pageNumber: n } });
    },
    // goToPage(pageNames) {
    // Use Vue Router to navigate to the corresponding page
    // this.$router.push({ name: 'page', params: { pageNames } });
    // },
  },
};
</script>

<style>
.city-news-card {
  max-width: 600px; /* Adjust the width as needed */
  /* margin: 0 auto;  */
  border: 1px solid #e0e0e0; /* Add a subtle border */
}

.headline {
  background-color: #2196f3; /* Set a background color for the title */
  color: #fff; /* Text color for the title */
}
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  /* Apply zoom effect for screens with a maximum width of 768px (typical mobile devices) */
  .carousel-image {
    transform: scale(
      1.7
    ); /* Adjust the scale value as needed for your desired zoom effect */
  }
}
/* Custom styles for carousel arrow buttons */
.v-carousel .v-btn {
  font-size: 12px; /* Adjust the font size to make the buttons smaller */
}

/* Adjust the opacity of the buttons */
.v-carousel .v-btn.v-btn--icon {
  opacity: 0.5; /* Adjust the opacity value as needed */
}
</style>

<script>
import { RouterLink, RouterView } from 'vue-router';
import db from './Firebase/init';

export default {
  methods: {
    async items() {
      const colRef = collection(db, 'items');
      // const dataObj = {
      //   item_name: 'onion',
      //   price: '24',
      // };
      // const docRef = await colRef.get();
      console.log('document creared with id');
    },
  },
  created() {
    this.items();
  },
};

//  import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <v-app>
    <v-app-bar class="bg-green-accent-4" :elevation="0">
      <v-container class="d-flex align-center py-0">
        <v-app-bar-title class="pl-0">
          <div class="d-flex align-center">
            <!-- <v-avatar
              class="me-3"
              image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
              rounded="0"
            /> -->
            <v-button>
              <RouterLink to="/"
                ><span class="text-white font-weight-black"
                  >HBhalli</span
                ></RouterLink
              >
            </v-button>
            <v-spacer></v-spacer>
            <v-icon icon="mdi-cart text-white" size="large" />
          </div>
        </v-app-bar-title>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>
      <v-container
        class="text-overline d-flex align-center justify-space-between"
      >
        <div>
          Copyright &copy; 2016-{{ new Date().getFullYear() }} Vuetify, LLC
        </div>

        <v-icon icon="$vuetify" size="x-large" />
      </v-container>
    </v-footer>
  </v-app>
</template>

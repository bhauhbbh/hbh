<template>
  <v-container class="bg-grey-lighten-4">
    <div>
      <h1>My Firebase Data</h1>
      <ul>
        <li v-for="item in items" :key="item.key">{{ item.value }}</li>
      </ul>
    </div>
    <v-row justify="center">
      <v-col v-for="(_, n) in 12" :key="n" cols="12" md="4" lg="3">
        <v-card rounded="lg" class="mx-auto elevation-0" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="150px"
            cover
          >
          </v-img>
          <v-card-title class="text-h6 font-weight-black">
            Tomato
          </v-card-title>
          <v-row no-gutters>
            <v-col>
              <v-sheet class="mx-auto">
                <v-card-text class="text-h6">
                  Rs 65 <span class="text-disabled">/ kg</span>
                </v-card-text></v-sheet
              >
            </v-col>
            <v-col>
              <v-sheet class="mx-auto pe-3">
                <v-select
                  density="compact"
                  label="Quantity"
                  :items="['1 Kg', '2 Kg', '3 Kg', '4 Kg', '5 Kg', '6 Kg']"
                ></v-select>
              </v-sheet>
            </v-col> </v-row
          ><v-card-actions>
            <v-btn
              block
              rounded="lg"
              color="green-darken-1"
              append-icon="mdi mdi-cart-plus"
              variant="flat"
              class="text-none text-h6"
            >
              Add to cart
              <template v-slot:append>
                <v-icon color="white"></v-icon>
              </template>
            </v-btn>
          </v-card-actions> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script>
// import firebase from 'firebase/app';
// import 'firebase/database';
export default {
  // data() {
  //   return {
  //     items: [],
  //   };
  // },
  // created() {
  //   // Reference to the Firebase database
  //   const db = firebase.database();
  //   // Reference to a specific database node
  //   const itemsRef = db.ref('items');
  // Fetch data once
  // itemsRef
  //   .once('value')
  //   .then((snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       // Convert Firebase data to an array
  //       this.items = Object.entries(data).map(([key, value]) => ({
  //         key,
  //         value,
  //       }));
  //     } else {
  //       this.items = [];
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching data:', error);
  //   });
  // },
  //   props: {
  //     product: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
  //   data() {
  //     return {
  //       selectedQuantity: 0.5, // Default quantity selected
  //       quantityOptions: [0.5, 1, 1.5, 2, 2.5, 3], // Customize the available quantity options as needed
  //     };
  //   },
};
</script>

<style></style>

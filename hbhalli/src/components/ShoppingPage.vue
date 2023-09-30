<template>
  <v-container class="bg-grey-lighten-4">
    <h2 class="mt-12 mb-4 pa-4 blue-grey-darken-1 text-center">Vegitables 1</h2>
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
                  :items="[
                    '1/2 Kg',
                    '1 Kg',
                    '2 Kg',
                    '3 Kg',
                    '4 Kg',
                    '5 Kg',
                    '6 Kg',
                  ]"
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
    <h2 class="mt-12 mb-4 pa-4 blue-grey-darken-1 text-center">Vegitables 2</h2>
    <v-row justify="center">
      <v-col v-for="(_, n) in 8" :key="n" cols="12" md="4" lg="3">
        <v-card rounded="lg" class="mx-auto elevation-0" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="150px"
            cover
          >
          </v-img>
          <v-card-title class="text-h6 font-weight-black"> Soppu </v-card-title>
          <v-row no-gutters>
            <v-col>
              <v-sheet class="mx-auto">
                <v-card-text class="text-h6">
                  Rs 65 <span class="text-disabled"></span> </v-card-text
              ></v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="mx-auto pe-3">
                <v-select
                  density="compact"
                  label="Quantity"
                  :items="['1', '2', '3', '4', '5', '6']"
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
export default {};
</script>

<style></style>

<template>
  <v-row class="d-flex flexi">
   <v-col>
    <Form />
   </v-col>
   <v-col>
    <Table />
   </v-col>
  </v-row>
</template>

<script>
export default {
}
</script>

<style>
@media only screen and (max-width: 1250px) {
  .flexi{flex-direction: column;}
}
</style>
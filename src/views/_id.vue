<template>
  <b-container fluid>
    Esta es mi vista dinamica
    mi uID ES: {{this.$route.params.uid}}
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      uid: this.$route.params.uid
    };
  },
  created() {
    console.log(this.uid);
  }
};
</script>

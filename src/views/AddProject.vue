<template>
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input v-model="title" type="text" required />
    <label>Details: </label>
    <textarea v-model="details" required> </textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {},
  },
};
</script>

<style></style>

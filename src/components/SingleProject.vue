<template>
  <div class="project">
    <div class="action">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons">edit</span>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleComplete" class="material-icons">done</span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri:`http://localhost:3000/projects/${this.project.id}`
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    deleteProject(){
        fetch(this.uri, {method:"DELETE"})
        .then(()=> this.$emit('delete', this.project.id))
        .catch((err)=>console.log(err))
    },
    toggleComplete(){
           fetch(this.uri, {
             method:"PATCH",
             headers:{'Content-Type' :'application/json'},
             body:JSON.stringify({completed: !this.project.complete})
           })
    }
  }
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
}
.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>

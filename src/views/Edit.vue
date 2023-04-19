<template>
  <div class="container">
    <h1 class="mt-5">Edit Task</h1>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="task.title" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" v-model="task.description"></textarea>
      </div>
      <div class="form-group">
        <label for="completed">Completed</label>
        <select class="form-control" id="completed" v-model="task.completed">
          <option :value="true">Yes</option>
          <option :value="false">No</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="updateTask">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      task: {
        id: '',
        title: '',
        description: '',
        completed: null,
      },
    };
  },
  mounted() {
    this.getTask();
  },
  methods: {
    getTask() {
      const token = localStorage.getItem('token');
      if (!token) {
        window.alert('Please log in to show the task.');
        this.$router.push('/login');
        return;
      }

      const taskId = this.$route.params.id;

      axios
        .get(`/api/tasks/${taskId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.task = response.data;
        })
        .catch((error) => {
          console.log(error.response.data);
          // Handle the error
        });
    },
    updateTask() {
      const token = localStorage.getItem('token');
      if (!token) {
        window.alert('Please log in to update tasks.');
        this.$router.push('/login');
        return;
      }

      const taskId = this.$route.params.id;

      axios
        .put(`/api/tasks/${taskId}`, this.task, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          window.alert('Task updated successfully.');
          this.$router.push({ path: '/all' });
        })
        .catch((error) => {
          console.log(error.response.data);
          // Handle the error
        });
    },
  },
};
</script>

<template>
    <div class="container">
      <h1 class="mt-5">Task List</h1>
      <div class="table-responsive mt-3">
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
              <td>{{ task.title }}</td>
              <td>{{ task.description }}</td>
              <td>{{ task.completed ? 'Yes' : 'No' }}</td>
              <td>

                <router-link :to="{ name: 'edit', params: { id: task.id }}" class="btn btn-primary">Edit</router-link>
                <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: [],
      };
    },
    mounted() {
      this.getTasks();
    },
    methods: {
      getTasks() {
        const token = localStorage.getItem('token');
        if (!token) {
          window.alert('Please log in to show tasks.');
          this.$router.push('/login');
          return;
        }
  
        axios
          .get('/api/tasks', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.tasks = response.data;
          })
          .catch((error) => {
            console.log(error.response.data);
            // Handle the error
          });
      },
      deleteTask(taskId) {
        const token = localStorage.getItem('token');
        if (!token) {
          window.alert('Please log in to delete tasks.');
          this.$router.push('/login');
          return;
        }
  
        axios
          .delete(`/api/tasks/${taskId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            // Remove the task from the tasks array
            const index = this.tasks.findIndex((task) => task.id === taskId);
            this.tasks.splice(index, 1);
            window.alert('Task deleted successfully.');
          })
          .catch((error) => {
            console.log(error.response.data);
            // Handle the error
          });
      },
    },
  };
  </script>
  
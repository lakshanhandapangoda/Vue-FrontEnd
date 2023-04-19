<template>
    <div class="container">
      <h1 class="mt-5">Add Task</h1>
      <form @submit.prevent="addTask" class="mt-3">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" v-model="title" id="title" name="title" required class="form-control">
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea v-model="description" id="description" name="description" required class="form-control"></textarea>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" v-model="completed" id="completed" name="completed" class="form-check-input">
          <label for="completed" class="form-check-label">Completed:</label>
        </div>
        <button type="submit" class="btn btn-primary">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        title: '',
        description: '',
        completed: false,
      };
    },
    methods: {
      addTask() {
        const token = localStorage.getItem('token');
        if (!token) {
          window.alert('Please log in to add a task.');
          this.$router.push('/login');
          return;
        }
        const data = {
          title: this.title,
          description: this.description,
          completed: this.completed,
        };
        axios.post('/api/tasks', data, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response.data);
          // Show alert message
          window.alert('Task added successfully!');
          // Clear input fields
          this.title = '';
          this.description = '';
          this.completed = false;
        })
        .catch(error => {
          console.log(error.response.data);
          // Handle the error
        });
      },
    },
  };
  </script>
  
  
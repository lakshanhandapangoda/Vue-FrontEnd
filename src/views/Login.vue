<template>
    <div class="container">
      <h1 class="mt-5">Registration</h1>
      <form @submit.prevent="register" class="mt-3">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="registerForm.name" id="name" name="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="registerForm.email" id="email" name="email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="registerForm.password" id="password" name="password" required class="form-control">
        </div>
        <div class="form-group">
          <label for="c_password">Confirm Password:</label>
          <input type="password" v-model="registerForm.c_password" id="c_password" name="c_password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
  
      <hr class="my-5">
  
      <h1 class="mt-5">Login</h1>
      <form @submit.prevent="login" class="mt-3">
        <div class="form-group">
          <label for="login-email">Email:</label>
          <input type="email" v-model="loginForm.email" id="login-email" name="email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" v-model="loginForm.password" id="login-password" name="password" required class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
  
      <hr class="my-5">
  
      <h1 class="mt-5">Logout</h1>
      <button @click="logout" class="btn btn-primary">Logout</button>
    </div>
  </template>

  <script>
  

import axios from 'axios'

  export default {
    data() {
      return {
        registerForm: {
          name: '',
          email: '',
          password: '',
          c_password: ''
        },
        loginForm: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        axios.post('/api/register', this.registerForm)
          .then(response => {
            localStorage.setItem('token', response.data.data.token)
            localStorage.setItem('name', response.data.data.name)
            alert(response.data.message)
          })
          .catch(error => {
            alert(error.response.data.message)
          })
      },
      login() {
      axios.post('/api/login', this.loginForm)
      .then(response => {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('name', response.data.data.name);
      alert(response.data.message);

      // Clear the login form
      this.loginForm.email = '';
      this.loginForm.password = '';
    })
    .catch(error => {
      alert(error.response.data.message);
    });
},

      logout() {
        axios.post('/api/logout', null, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(response => {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            alert(response.data.message)
          })
          .catch(error => {
            alert(error.response.data.message)
          })
      }
    }
  }
  </script>
  
<template>

    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue Crud</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active" aria-current="page" href="#">Create Task</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/all" class="nav-link active" aria-current="page" href="#">All Task</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink to="/dashboard" class="nav-link active" aria-current="page" href="#">Dashboard</RouterLink>
            </li> -->
            <li class="nav-item">
                <RouterLink to="/login" class="nav-link active" aria-current="page" href="#">Login</RouterLink>
            </li>
           
           
            
          </ul>
       
        </div>
      </div>
    </nav>
    
    </template>
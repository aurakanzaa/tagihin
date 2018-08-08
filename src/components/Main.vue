<template>
   <div class="login">
    <h3 class="tombol">Sign In</h3>
    <p>login</p>
    <input class="form-control" type="text" v-model="email" placeholder="Email">
    <br><br>
    <input class="form-control" type="text" v-model="password" placeholder="Password">
    <br><br>
    <button v-on:click="signIn" class="btn btn-primary">Login</button>
    <br>
    <p>Dont Have Account ? Yo can register <router-link to="/">Here</router-link></p>
  </div>

    
    
</template>


<style>

.login {
    margin: auto 30%;
  }

  .tombol{
      background-color: blue;
      color: white;
      border-style: ro
  }
  .kotak{
    border-left: 6px solid red;
    background-color: lightgrey;
  }
</style>

<script>
    

</script>



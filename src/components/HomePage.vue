<template>
<div class="container-fluid">
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>
</nav>
  <!-- Контент здесь -->
  <div class="row">
    <div class="col-12 col-sm-12">

    </div>
  </div>
<div>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Адрес электронной почты</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Пароль</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Проверить меня</label>
  </div>
  <button type="submit" class="btn btn-primary">Отправить</button>
</form>
</div>
</div>
  
</template>

<script>
export default {
name: "HomePage",

data() {
    return {

    }
}
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";


form {
color: $root-red;
}


</style>
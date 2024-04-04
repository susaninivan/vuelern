<template>
  <div class="container-fluid p-0">
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          VIB
        </a>
        <button class="btn btn-outline-primary" type="submit">Войти</button>
      </div>
    </nav>
    <!-- Контент здесь -->
    <div class="container-fluid p-0">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/scale_2400.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/scale_3200.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/scale_1200.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>

    <div class="form-position">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Адрес электронной почты</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Мы никогда никому не передадим вашу электронную почту.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Проверить меня</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
    </div>
    <div class="container-fluid footer-wrapp">
      <footer>
        <div class="footer-box">
          <p class="m-0">© Ivan GmbH {{ currentData }} </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
 
    return {};
  },
  

  computed: {
    currentData() {
      var now = new Date();
      // var now = new Date(2024, 3, 3);
      // return now.getFullYear();
      return `${
        now.getFullYear() +
        " " +
        now.getDate() +  " " +  
        now.toLocaleString('default', { month: 'long' })+ " "+               
        now.getHours() +
        ":" +
        now.getMinutes()
      }`;
    },
  },
  methods: {
    
    // greet: function (months, month) {
    //     for (let i = 0; i < month.length; i++) {
    //       if (months == month.length) {
    //         return month[0];
    //       }
    //     }
    //   }
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/styles/styles.scss";

// form {
// color: $root-red;
// }
.carousel-inner {
  max-height: 600px;
}

.form-position {
  padding: 50px;
  background: #b8b8b86b;
  position: absolute;
  top: 135px;
  right: 145px;

  form label {
    color: #fff;
  }
  .form-text {
    color: #fff;
  }
}
.footer-wrapp {
  background-color: rgb(248 249 250);
}

.footer-box {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

$media: screen;
// $feature: -webkit-min-device-pixel-ratio;
// $value: 1.5;
// @media #{$media} and ($feature: $value) {}
@media #{$media} and (max-width: 700px){
  .form-position{
    padding: 30px;   
    top: 80px;
    right: 50px;
    left: 50PX;
}
.form-control {
      max-height: 30px;
}
.mb-3 {
    margin-bottom: 0.5rem !important;
}
.form-label {
    margin-bottom: .1rem;
}
}
</style>
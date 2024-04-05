<template>
  <!-- <button @click="firstTask(); secondTask();">Нажми на меня</button> -->
  <!-- <button @click="handleTasks">Нажми на меня</button> -->
  <a @click="performTasksWithCare()"> Узнать дату и время</a>
  {{ message }}
  <!-- ver.2 -->
  <!-- <button @click="executeAllTasks">Нажми на меня</button> -->
</template>

<script>
export default {
  name: "FunkVue",

  data() {
    return {
      // message: "",
    };
  },

  // mounted() {
  //   this.message = `${
  //     "Дата: " + this.firstTask() + " Время: " + this.secondTask()
  //   }`;
  // },

  methods: {
    dTask() {
      return alert(
        `${"Дата: " + this.firstTask() + " Время: " + this.secondTask()}`
      );
    },

    handleTasks() {
      this.firstTask();
      this.secondTask();
    },
    firstTask() {
      // ... Первая задача: спасение мира ...
      // console.log("Func1")
      let nowData = new Date();
      return nowData.getDate() + nowData.toLocaleString("default", { month: "long" });
      
    },
    secondTask() {
      // ... Вторая задача: приготовление кофе ...
      // console.log("Func2")
      let nowTime = new Date();
      return String(nowTime.getHours()) + ":" + String(nowTime.getMinutes());
    },
    performTasksWithCare() {
      try {
        this.firstTask();
      } catch (error) {
        console.error("Ошибка в firstTask", error);
      }
      try {
        this.secondTask();
      } catch (error) {
        console.error("Проблема в secondTask", error);
      }
      try {
        this.dTask();
      } catch (error) {
        console.error("Проблема в dTask", error);
      }
    },
    //ver 2
    //   executeAllTasks() {
    //     [this.firstTask, this.secondTask].forEach(function => function());
    //     // "Сформировать "строй" из задач и выполнять их по порядку!"
    //   }
  },
};
</script>

<style lang="scss" scoped>
a {
  color:#42b883;
  font-size: 12px;
  font-family: "Roboto", sans-serif;
    font-weight: 300;
   font-style: normal;
   cursor: pointer;

   &:hover {
    color: rgb(8, 193, 57);
   }
   
}

</style>
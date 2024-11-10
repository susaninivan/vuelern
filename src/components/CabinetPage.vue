<template>
  <div>
    <h1>Кабинет пользователя</h1>
    <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p>
    <button type="button" class="btn btn-primary" @click="openModal">
      Открыть мод. окно
    </button>
    <ModalVue
      v-if="isModalOpen"
      title="Пользовательское соглашение"
      @close="isModalOpen = false"
    >
      <div class="information">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
          repellendus fugit. Perferendis molestiae reiciendis magni minus, saepe
          voluptatem. Laborum temporibus quas eos minus placeat saepe nisi
          nesciunt distinctio optio fugit.
        </p>
      </div>
    </ModalVue>
    <SignUp/>

    <audio controls>
      <!-- <source src="../assets/midi/2.ogg" type="audio/ogg" /> -->
      <source src="../assets/mp3/2.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    
  </div>
</template>

<script>
import ModalVue from "./ModalVue";
import SignUp from "./SignUp.vue";

export default {
  components: { ModalVue, SignUp },
  name: "CabinetPage",
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
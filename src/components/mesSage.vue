<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
      };
    },
    mounted() {
      this.message = this.getMessage();
    },
    methods: {
      getMessage() {
        return 'Hello, World!';
      },
    },
  };
</script>
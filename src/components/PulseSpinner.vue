<template>
  <div v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: true
      },
      color: {
        type: String,
        default: '#333',
      },
      width: {
        type: String,
        default: '40',
      },
      height: {
        type: String,
        default: '40',
      }
    },
    data() {
      return {
        isLoading: this.loading,
        styles: {
          backgroundColor: this.color,
          width: this.width + 'px',
          height: this.height + 'px'
        }
      }
    },
    name: "PulseSpinner"
  }

</script>

<style scoped>
  .spinner {
    width: 40px;
    height: 40px;
    margin: 100px auto;
    background-color: #333;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0)
    }
    100% {
      -webkit-transform: scale(1.0);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
      opacity: 0;
    }
  }

</style>

<template>
  <div v-if="isLoading">
    <div class="spinner" :style="styles"></div>
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
    data(){
      return {
        isLoading: this.loading,
        styles: {
          backgroundColor: this.color,
          width: this.width + 'px',
          height: this.height + 'px'
        }
      }
    },
    name: "SquareSpinner"
  }
</script>

<style scoped>
  .spinner {
    width: 40px;
    height: 40px;
    background-color: #333;

    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
  }

  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px)
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg)
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)
    }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
</style>
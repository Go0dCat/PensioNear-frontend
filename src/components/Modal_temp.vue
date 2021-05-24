<template >
  <transition name="fade">
    <div v-if="displayModal===true" class="modal wrapper">
      <h2>{{title}}</h2>

      <p>{{msg}}</p>

        <div class="btn btn_round" @click="closeModal()">Close</div>
        
    </div>
  </transition>
</template>
<script>
export default {
    name: "modal",
    props:{
        title: String,
        msg: String,
    },
    data : function(){
    return{
      displayModal: false,
    };
  },
  methods: {
      closeModal() {
        this.displayModal = false;
        document.querySelector("body").classList.remove("overflow-hidden");
      },
      openModal() {
        this.displayModal = true;
        document.querySelector("body").classList.add("overflow-hidden");
      }
  },
  computed: {


      
  }
};
</script>
<style lang="scss" scoped>

.modal {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    background-color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.26));
    height:300px;
    width:300px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding:1em;
    justify-items: center;
}

</style>
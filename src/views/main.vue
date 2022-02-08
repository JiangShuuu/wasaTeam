<template>
  <div>
    <CheckOutModal v-if="payModal" :user="user" @final-submit="finalSubmit" />
    <section class="main">
      <div class="content">
        <div class="content_left">
          <div class="content_left_title">
            <h1 class="">結帳</h1>
          </div>
          <StepPanel :formStep="formStep" />
          <div class="form">
            <div class="form_area">
              <router-view
                :initial-user="user"
                @after-submit="AfterSubmit"
                @before-submit="BeforeSubmit"
                @final-submit="finalSubmit"
              />
            </div>
          </div>
        </div>
        <div class="content_right">
          <ProductsCart
            :initial-items="items"
            :delivery="user.delivery"
            :inital-totleCost="user.totleCost"
            @totle-Cost-Update="totleCostUpdate"
            @delete-item="deleteItem"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductsCart from "../components/productsCart.vue";
import StepPanel from "../components/StepPanel.vue";
import CheckOutModal from "../components/CheckOutModal.vue";
import axios from "axios";

// const dummyData = {
//   items: [
//     {
//       id: 1,
//       name: "白色長袖T袖",
//       cost: 1999,
//       num: 1,
//       pic: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
//     },
//     {
//       id: 2,
//       name: "大學長袖帽T(淺藍)",
//       cost: 3999,
//       num: 1,
//       pic: "https://images.unsplash.com/photo-1617171594202-100a53bdfe04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//     },
//   ],
// };

export default {
  name: "Main",
  components: {
    ProductsCart,
    StepPanel,
    CheckOutModal,
  },

  data() {
    return {
      formStep: 0,
      user: {
        gender: "",
        name: "",
        tel: "",
        email: "",
        city: "",
        address: "",
        id: -1,
        delivery: 0,
        payerName: "",
        cardNumber: "",
        date: "",
        CVC: "",
        totleCost: 0,
      },
      items: [],
      payModal: false,
    };
  },
  mounted() {
    this.fetchProduct();
    this.startFormStep();
  },
  methods: {
    async fetchProduct() {
      try {
        const res = await axios.get(
          "https://mocki.io/v1/7e6632af-1040-452b-a67e-42046cce1157"
        );
        this.items = res.data.items;
      } catch (error) {
        console.log(error);
      }
    },
    startFormStep() {
      if (this.$route.name === "address") {
        this.formStep = 0;
      } else if (this.$route.name === "delivery") {
        this.formStep = 1;
      } else if (this.$route.name === "payment") {
        this.formStep = 2;
      }
    },
    AfterSubmit() {
      this.formStep += 1;
    },
    BeforeSubmit() {
      this.formStep -= 1;
    },
    finalSubmit() {
      this.payModal = !this.payModal;
    },
    // productsCart
    totleCostUpdate(payment) {
      this.user.totleCost = payment.newtotleCost;
    },
    deleteItem(payment) {
      this.items = payment.newItem;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.main {
  padding: 0 1rem;
  @include web {
    @include flexCenter;
  }
  .content {
    padding-top: 5rem;
    width: 100%;
    height: 100%;
    &_right {
      border: 1px solid $light-gray;
      border-radius: 5px;
      margin-top: 2rem;
    }
    @include web {
      @include flexCenter;
      padding-top: 10rem;
      justify-content: space-between;
      width: 90%;
      position: relative;
      &_left {
        width: 52%;
        padding-bottom: 1rem;
        position: relative;
        &_title {
          font-size: 32px;
          position: absolute;
          top: -3rem;
        }
      }
      &_right {
        width: 35%;
      }
    }
  }
}
</style>

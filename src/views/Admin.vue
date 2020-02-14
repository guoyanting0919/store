<template>
  <div>
    <h3>Admin Page</h3>
    <div class="form-group">
      <input type="text" v-model="name" placeholder="name" class="form-input" />
      <select v-model="category" name="category" id="category">
        <option value="man">man</option>
        <option value="women">women</option>
        <option value="kid">kid</option>
        <option value="couple">couple</option>
      </select>
      <input type="text" v-model="detail" placeholder="detail" class="form-input" />
      <input type="text" v-model="mainPic" placeholder="mainPic" class="form-input" />
      <input type="text" v-model="detailPic1" placeholder="detailPic1" class="form-input" />
      <input type="text" v-model="detailPic2" placeholder="detailPic2" class="form-input" />
      <input type="text" v-model="detailPic3" placeholder="detailPic3" class="form-input" />
      <select v-model="color" name="color" id="color">
        <option value="#bdc3ce">man</option>
        <option value="#dbb6b6">women</option>
        <option value="#eeeea0">kid</option>
        <option value="#baceb7">couple</option>
      </select>
      <input type="text" v-model="price" placeholder="price" class="form-input" />
      <input type="text" v-model="specialPrice" placeholder="specialPrice" class="form-input" />
    </div>
    <button class="btn btn-info" @click="addProduct">送出</button>
  </div>
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      name: "",
      category: "",
      detail: "",
      mainPic: "",
      detailPic1: "",
      detailPic2: "",
      detailPic3: "",
      color: "",
      price: "",
      specialPrice: ""
    };
  },
  methods: {
    addProduct() {
      const vm = this;
      let product = {
        name: vm.name,
        category: vm.category,
        detail: vm.detail,
        mainPic: vm.mainPic,
        detailPic1: vm.detailPic1,
        detailPic2: vm.detailPic2,
        detailPic3: vm.detailPic3,
        color: vm.color,
        price: vm.price,
        specialPrice: vm.specialPrice
      };
      // console.log(product);
      this.$http
        .post(
          "https://aqueous-earth-60961.herokuapp.com/admin/addProduct",
          product
        )
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>


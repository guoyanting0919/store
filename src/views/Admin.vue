<template>
  <div class="admin">
    <h3>Add Product</h3>
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
    <br />
    <input type="file" name="file" ref="file" @change="uploadImg" />
    <button @click="onSubmit">upload</button>
    <h3>Products</h3>
    <table class="productsTable">
      <tr>
        <th>產品名稱</th>
        <th>產品售價</th>
        <th class="text-center">刪除/修改</th>
      </tr>
      <tr
        class="productTableRow"
        v-for="(product,key) in products"
        :props="key"
        :key="product.name"
      >
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td class="text-center">
          <button class="btn btn-outline-danger" @click="deleteProduct(key)">DEL</button>
          <button class="btn btn-outline-info">COM</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "admin",
  data() {
    return {
      products: "",
      name: "",
      category: "",
      detail: "",
      mainPic: "",
      detailPic1: "",
      detailPic2: "",
      detailPic3: "",
      color: "",
      price: "",
      specialPrice: "",
      file: ""
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      vm.$http.get("http://localhost:3000/admin/getProduct").then(res => {
        vm.products = res.data;
      });
    },
    deleteProduct(key) {
      const vm = this;
      let id = key;
      vm.$http
        .delete(`http://localhost:3000/admin/deleteProduct/${id}`)
        .then(res => {
          vm.getProducts();
        });
    },
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
      //https://aqueous-earth-60961.herokuapp.com/admin/addProduct
      //http://localhost:3000/admin/addProduct
      this.$http
        .post("http://localhost:3000/admin/addProduct", product)
        .then(res => {
          if (res.data.success) {
            vm.getProducts();
          } else {
            alert("添加產品失敗");
            this.$router.push("/home");
          }
        });
    },
    uploadImg() {
      this.file = this.$refs.file.files[0];
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("image", this.file); //required
      axios({
        method: "POST",
        url: "https://api.imgur.com/3/upload",
        data: formData,
        headers: {
          Authorization: "Client-ID " + "ec3aa32e2ae58a8" //放置你剛剛申請的Client-ID
        },
        mimeType: "multipart/form-data"
      })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>


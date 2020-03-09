<template>
  <div class="admin">
    <!-- 新增餐點 -->
    <div class="addProduct">
      <form class="addProductForm">
        <h3 class="addProductTitle my-2">{{addOrUpdate}}</h3>
        <h6 class="text-right backToAdd" v-if="addOrUpdate==='修改餐點'" @click="backToAdd">返回新增餐點</h6>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="storeName">店名</label>
            <input
              v-model="storeName"
              id="storeName"
              type="text"
              class="form-control"
              placeholder="storeName"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="category">分類</label>
            <select v-model="category" id="category" class="form-control">
              <option selected>台灣小吃</option>
              <option>甜點/飲料</option>
              <option>精緻燒烤</option>
              <option>早午餐</option>
              <option>定食</option>
              <option>小火鍋</option>
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="storeSite">地點</label>
            <select v-model="storeSite" id="storeSite" class="form-control">
              <option>台北市</option>
              <option>基隆市</option>
              <option>新北市</option>
              <option>連江縣</option>
              <option>宜蘭縣</option>
              <option>新竹市</option>
              <option>新竹縣</option>
              <option>桃園市</option>
              <option>苗栗縣</option>
              <option>臺中市</option>
              <option>彰化縣</option>
              <option>南投縣</option>
              <option>嘉義市</option>
              <option>嘉義縣</option>
              <option>雲林縣</option>
              <option>臺南市</option>
              <option>高雄市</option>
              <option>澎湖縣</option>
              <option>金門縣</option>
              <option>屏東縣</option>
              <option>臺東縣</option>
              <option>花蓮縣</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="foodCP">餐點 C P</label>
            <select v-model="foodCP" id="foodCP" class="form-control">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="attitude">服務態度</label>
            <select v-model="attitude" id="attitude" class="form-control">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="returnVisit">回訪意願</label>
            <select v-model="returnVisit" id="returnVisit" class="form-control">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="environment">用餐環境</label>
            <select v-model="environment" id="environment" class="form-control">
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="storeDetail">詳細說明</label>
          <br />
          <textarea v-model="storeDetail" class="w-100" id="storeDetail" cols="30" rows="10"></textarea>
        </div>
        <div class="form-row" style="position:relative" ref="loaderFile1">
          <div class="form-group col-md-4 text-center">
            <input
              class="uploadInput"
              type="file"
              name="file1"
              ref="file1"
              @change="uploadImg('file1')"
            />
            <div>
              <button
                v-if="!pic1"
                class="btn btn-outline-danger btn-sm mt-1"
                @click.prevent="onSubmit('file1')"
              >上傳</button>
              <button @click.prevent class="btn btn-outline-success btn-sm mt-1" v-else>上傳成功</button>
            </div>
          </div>
          <div class="form-group col-md-4 text-center">
            <input
              class="uploadInput"
              type="file"
              name="file2"
              ref="file2"
              @change="uploadImg('file2')"
            />
            <div>
              <button
                v-if="!pic2"
                class="btn btn-outline-danger btn-sm mt-1"
                @click.prevent="onSubmit('file2')"
              >上傳</button>
              <button @click.prevent class="btn btn-outline-success btn-sm mt-1" v-else>上傳成功</button>
            </div>
          </div>
          <div class="form-group col-md-4 text-center">
            <input
              class="uploadInput"
              type="file"
              name="file3"
              ref="file3"
              @change="uploadImg('file3')"
            />
            <div>
              <button
                v-if="!pic3"
                class="btn btn-outline-danger btn-sm mt-1"
                @click.prevent="onSubmit(file3)"
              >上傳</button>
              <button @click.prevent class="btn btn-outline-success btn-sm mt-1" v-else>上傳成功</button>
            </div>
          </div>
        </div>
        <div class="text-right">
          <button
            v-if="addOrUpdate==='新增餐點'"
            type="submit"
            class="btn btn-outline-primary"
            @click.prevent="addProduct"
          >確定新增</button>
          <button
            v-else
            type="submit"
            class="btn btn-outline-primary"
            @click.prevent="updateProduct"
          >確定修改</button>
        </div>
      </form>
    </div>

    <!-- 產品列表 -->
    <div>
      <h3>Products</h3>
      <table class="productsTable">
        <tr>
          <th></th>
          <th>店名</th>
          <th>類別</th>
          <th class="text-center">刪除/修改</th>
        </tr>
        <tr
          class="productTableRow"
          v-for="(product,key) in products"
          :props="key"
          :key="product.name"
        >
          <div class="testPic" :style="{backgroundImage:`url(${product.pic1})`}"></div>
          <td>{{product.storeName}}</td>
          <td>{{product.category}}</td>
          <td class="text-center">
            <button class="btn btn-outline-danger" @click="deleteProduct(key,product.storeName)">DEL</button>
            <button class="btn btn-outline-info" @click="commitProduct(product)">COM</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "admin",
  data() {
    return {
      token: this.$cookies.get("token"),
      addOrUpdate: "新增餐點",
      products: "",
      file1: "",
      file2: "",
      file3: "",
      pic1: "",
      pic2: "",
      pic3: "",
      storeName: "",
      category: "",
      storeSite: "",
      foodCP: "",
      attitude: "",
      returnVisit: "",
      environment: "",
      storeDetail: "",
      productId: ""
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      vm.$http
        .get("https://aqueous-earth-60961.herokuapp.com/products/products")
        .then(res => {
          vm.products = res.data;
        });
    },
    deleteProduct(key, name) {
      const vm = this;
      let id = key;
      let user = {
        token: vm.token
      };
      let r = confirm(`確認刪除${name}?`);
      if (r) {
        vm.$http
          .post(
            `https://aqueous-earth-60961.herokuapp.com/admin/deleteProduct/${id}`,
            user
          )
          .then(res => {
            vm.getProducts();
          });
      } else {
        alert("已取消");
      }
    },
    addProduct() {
      const vm = this;
      let product = {
        storeName: vm.storeName,
        category: vm.category,
        storeSite: vm.storeSite,
        foodCP: vm.foodCP,
        attitude: vm.attitude,
        returnVisit: vm.returnVisit,
        environment: vm.environment,
        storeDetail: vm.storeDetail,
        pic1: vm.pic1,
        pic2: vm.pic2,
        pic3: vm.pic3,
        token: vm.token
      };
      let config = {
        withCredentials: true
      };
      // console.log(product);
      //https://aqueous-earth-60961.herokuapp.com/admin/addProduct
      //http://localhost:3000/admin/addProduct
      this.$http
        .post(
          "https://aqueous-earth-60961.herokuapp.com/admin/addProduct",
          product,
          config
        )
        .then(res => {
          if (res.data.success) {
            (vm.pic1 = ""),
              (vm.pic2 = ""),
              (vm.pic3 = ""),
              (vm.storeName = ""),
              (vm.category = ""),
              (vm.storeSite = ""),
              (vm.foodCP = ""),
              (vm.attitude = ""),
              (vm.returnVisit = ""),
              (vm.environment = ""),
              (vm.storeDetail = ""),
              (vm.file1 = ""),
              (vm.file2 = ""),
              (vm.file3 = ""),
              vm.getProducts();
          } else {
            alert("添加產品失敗");
            this.$router.push("/home");
          }
        });
    },
    uploadImg(num) {
      if (num === "file1") {
        this.file1 = this.$refs.file1.files[0];
      } else if (num === "file2") {
        this.file2 = this.$refs.file2.files[0];
      } else {
        this.file3 = this.$refs.file3.files[0];
      }
    },
    onSubmit(num) {
      const vm = this;
      let loader = vm.$loading.show({
        isFullPage: false,
        container: vm.$refs.loaderFile1
      });
      let config = {
        withCredentials: false,
        headers: {
          Authorization: "Client-ID ec3aa32e2ae58a8"
        }
      };
      let formData = new FormData();
      if (num === "file1") {
        formData.append("image", this.file1); //required
      } else if (num === "file2") {
        formData.append("image", this.file2); //required
      } else {
        formData.append("image", this.file3); //required
      }

      this.$http
        .post(
          "https://cors-anywhere.herokuapp.com/https://api.imgur.com/3/image",
          formData,
          config
        )
        .then(res => {
          let imgUrl = res.data.data.link;
          loader.hide();
          console.log(imgUrl);
          if (num === "file1") {
            this.pic1 = imgUrl;
          } else if (num === "file2") {
            this.pic2 = imgUrl;
          } else {
            this.pic3 = imgUrl;
          }
        });
    },
    backToAdd() {
      const vm = this;
      vm.addOrUpdate = "新增餐點";
      vm.storeName = "";
      vm.category = "";
      vm.storeSite = "";
      vm.foodCP = "";
      vm.attitude = "";
      vm.returnVisit = "";
      vm.environment = "";
      vm.storeDetail = "";
      vm.pic1 = "";
      vm.pic2 = "";
      vm.pic3 = "";
    },
    commitProduct(product) {
      const vm = this;
      window.scrollTo(0, 0);
      vm.addOrUpdate = "修改餐點";
      vm.storeName = product.storeName;
      vm.category = product.category;
      vm.storeSite = product.storeSite;
      vm.foodCP = product.foodCP;
      vm.attitude = product.attitude;
      vm.returnVisit = product.returnVisit;
      vm.environment = product.environment;
      vm.storeDetail = product.storeDetail;
      vm.pic1 = product.pic1;
      vm.pic2 = product.pic2;
      vm.pic3 = product.pic3;
      vm.productId = product.productId;
    },
    updateProduct() {
      const vm = this;
      let product = {
        storeName: vm.storeName,
        category: vm.category,
        storeSite: vm.storeSite,
        foodCP: vm.foodCP,
        attitude: vm.attitude,
        returnVisit: vm.returnVisit,
        environment: vm.environment,
        storeDetail: vm.storeDetail,
        pic1: vm.pic1,
        pic2: vm.pic2,
        pic3: vm.pic3,
        productId: vm.productId,
        token: vm.token
      };
      vm.$http
        .post(
          "https://aqueous-earth-60961.herokuapp.com/admin/updateProduct",
          product
        )
        .then(res => {
          if (res.data === "success") {
            vm.backToAdd();
            vm.getProducts();
          }
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>


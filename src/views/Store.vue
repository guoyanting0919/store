<template>
  <div class="store">
    <!-- coupon -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-3">
          <div class="coupon">
            <h6>
              單筆消費滿3000，輸入優惠碼
              <span>OP12</span> ，即刻享有9折優惠!!
            </h6>
          </div>
        </div>
      </div>
    </div>

    <!-- storeSideBar -->
    <div class="storeSideBar px-5 py-3">
      <div class="sideBar">
        <div class="sideBarBg">
          <a class="sideBarLink" @click="category='all'">All</a>
          <a class="sideBarLink" @click="category='man'">Man</a>
          <a class="sideBarLink" @click="category='women'">Women</a>
          <a class="sideBarLink" @click="category='kid'">Child</a>
          <a class="sideBarLink" @click="category='couple'">Couple</a>
          <div class="sideBarIcon">
            <i class="fas fa-search"></i>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- storeMain -->
    <div class="storeMain" v-if="productsFilter">
      <div class="storeProducts row">
        <div
          class="storeProduct col-4 mt-4"
          v-for="product in productsFilter"
          :key="product.storeName"
        >
          <div class="productImg" :style="{backgroundImage:`url(${product.pic1})`}"></div>
          <div class="productTxt">
            <div class="productIconBg">
              <i class="fas fa-utensils"></i>
            </div>
            <h3 class="storeName">{{product.storeName}}</h3>
            <div class="badgesGroup">
              <span class="badge badge-pill badge-dark">{{product.storeSite}}</span>
              <span
                class="badge badge-pill"
                :class="{
                'badge-info':product.category==='台灣小吃',
                'badge-Secondary':product.category==='甜點/飲料',
                'badge-danger':product.category==='精緻燒烤',
                'badge-warning':product.category==='定食',
                'badge-primary':product.category==='小火鍋',
                'badge-success':product.category==='早午餐'}"
              >{{product.category}}</span>
            </div>
            <div class="productsScore mt-2">
              <div class="productScoreBox">
                <p class="scoreTitle">餐點 C P</p>
                <div class="cpScore">
                  <div class="1star" v-if="product.foodCP==='1'">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="2star" v-if="product.foodCP==='2'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="3star" v-if="product.foodCP==='3'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="4star" v-if="product.foodCP==='4'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="5star" v-if="product.foodCP==='5'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="productScoreBox">
                <p class="scoreTitle">服務態度</p>
                <div class="attitude">
                  <div class="1star" v-if="product.attitude==='1'">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="2star" v-if="product.attitude==='2'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="3star" v-if="product.attitude==='3'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="4star" v-if="product.attitude==='4'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="5star" v-if="product.attitude==='5'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="productScoreBox">
                <p class="scoreTitle">回訪意願</p>
                <div class="returnVisit">
                  <div class="1star" v-if="product.returnVisit==='1'">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="2star" v-if="product.returnVisit==='2'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="3star" v-if="product.returnVisit==='3'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="4star" v-if="product.returnVisit==='4'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="5star" v-if="product.returnVisit==='5'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <div class="productScoreBox">
                <p class="scoreTitle">用餐環境</p>
                <div class="environment">
                  <div class="1star" v-if="product.environment==='1'">
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="2star" v-if="product.environment==='2'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="3star" v-if="product.environment==='3'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="4star" v-if="product.environment==='4'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                  <div class="5star" v-if="product.environment==='5'">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "store",
  data() {
    return {
      productsData: "",
      category: "all"
    };
  },
  computed: {
    productsFilter() {
      const vm = this;
      let arryProducts = Object.values(vm.productsData);
      let data;
      let category = vm.category;
      if (category === "all") {
        data = arryProducts;
      } else {
        data = arryProducts.filter(product => {
          return product.category === category;
        });
      }

      return data;
    }
  },
  methods: {
    getProducts() {
      const vm = this;
      this.$http
        .get("https://aqueous-earth-60961.herokuapp.com/products/products")
        .then(res => {
          vm.productsData = res.data;
          console.log("OK");
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

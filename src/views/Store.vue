<template>
  <div class="store">
    <!-- coupon -->
    <div class="container-fluid">
      <div class="row storeBanner">
        <div class="col-12 p-3">
          <div class="coupon">
            <h6>公道婆˙美食街</h6>
          </div>
        </div>
      </div>
    </div>

    <!-- storeSideBar -->
    <div class="storeSideBar px-5 py-3">
      <div class="sideBar">
        <a class="sideBarLink" @click="category='所有餐點'">
          <div :class="{'activeSideBar':category==='所有餐點'}" class="sideBarBox">
            <span class="sideBarChTitle">所有餐點</span>
            <span class="sideBarEnTitle">ALL</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='台灣小吃'">
          <div :class="{'activeSideBar':category==='台灣小吃'}" class="sideBarBox">
            <span class="sideBarChTitle">台灣小吃</span>
            <span class="sideBarEnTitle">SNAKE</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='甜點/飲料'">
          <div :class="{'activeSideBar':category==='甜點/飲料'}" class="sideBarBox">
            <span class="sideBarChTitle">甜點/飲料</span>
            <span class="sideBarEnTitle">DESSERT</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='精緻燒烤'">
          <div :class="{'activeSideBar':category==='精緻燒烤'}" class="sideBarBox">
            <span class="sideBarChTitle">精緻燒烤</span>
            <span class="sideBarEnTitle">ROAST</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='定食'">
          <div :class="{'activeSideBar':category==='定食'}" class="sideBarBox">
            <span class="sideBarChTitle">定食</span>
            <span class="sideBarEnTitle">SETMEAL</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='小火鍋'">
          <div :class="{'activeSideBar':category==='小火鍋'}" class="sideBarBox">
            <span class="sideBarChTitle">小火鍋</span>
            <span class="sideBarEnTitle">HOTPOT</span>
          </div>
        </a>
        <a class="sideBarLink" @click="category='早午餐'">
          <div :class="{'activeSideBar':category==='早午餐'}" class="sideBarBox">
            <span class="sideBarChTitle">早午餐</span>
            <span class="sideBarEnTitle">BRUNCH</span>
          </div>
        </a>
      </div>
    </div>

    <!-- storeMain -->
    <div class="storeMain" v-if="productsFilter">
      <div class="storeProducts row">
        <div
          class="storeProduct col-4 my-4"
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
                'badge-secondary':product.category==='甜點/飲料',
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
      category: "所有餐點"
    };
  },
  computed: {
    productsFilter() {
      const vm = this;
      let arryProducts = Object.values(vm.productsData);
      let data;
      let category = vm.category;
      if (category === "所有餐點") {
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

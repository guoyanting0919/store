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
    <div class="storeMain">
      <!-- storeProduct -->
      <div class="storeProduct">
        <div class="container-fluid">
          <div class="row mt-3" v-if="productsData">
            <!-- product -->
            <div v-for="product in productsFilter" :key="product.name" class="col-4 mb-5">
              <div :style="{color:product.color}" class="row productBg">
                <div class="col-8 productImg" :style="{backgroundImage:`url(${product.mainPic})`}"></div>
                <div class="col-4">
                  <div class="row detailMt">
                    <div class="col-12">
                      <div
                        :style="{backgroundImage:`url(${product.detailPic1})`}"
                        class="detailImg1 detailImg"
                      ></div>
                    </div>
                    <div class="col-12">
                      <div
                        :style="{backgroundImage:`url(${product.detailPic2})`}"
                        class="detailImg2 detailImg"
                      ></div>
                    </div>
                    <div class="col-12">
                      <div
                        :style="{backgroundImage:`url(${product.detailPic3})`}"
                        class="detailImg3 detailImg"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="productInfo mt-2">
                <div>
                  <h5>{{product.name}}</h5>
                  <h5>售價:{{product.price}}</h5>
                </div>
                <button class="btn btn-danger">add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
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
    const vm = this;
    this.getProducts();
  }
};
</script>

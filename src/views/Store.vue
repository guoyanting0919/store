<template>
  <div class="store">
    <loading :active.sync="isLoading"></loading>
    <!-- coupon -->
    <div class="container-fluid mb-4">
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
        <a class="sideBarLink" @click.prevent="categoryHandler('所有餐點')">
          <div :class="{'activeSideBar':category==='所有餐點'}" class="sideBarBox">
            <span class="sideBarChTitle">所有餐點</span>
            <span class="sideBarEnTitle">ALL</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('台灣小吃')">
          <div :class="{'activeSideBar':category==='台灣小吃'}" class="sideBarBox">
            <span class="sideBarChTitle">台灣小吃</span>
            <span class="sideBarEnTitle">SNAKE</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('甜點/飲料')">
          <div :class="{'activeSideBar':category==='甜點/飲料'}" class="sideBarBox">
            <span class="sideBarChTitle">甜點/飲料</span>
            <span class="sideBarEnTitle">DESSERT</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('精緻燒烤')">
          <div :class="{'activeSideBar':category==='精緻燒烤'}" class="sideBarBox">
            <span class="sideBarChTitle">精緻燒烤</span>
            <span class="sideBarEnTitle">ROAST</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('定食')">
          <div :class="{'activeSideBar':category==='定食'}" class="sideBarBox">
            <span class="sideBarChTitle">定食</span>
            <span class="sideBarEnTitle">SETMEAL</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('小火鍋')">
          <div :class="{'activeSideBar':category==='小火鍋'}" class="sideBarBox">
            <span class="sideBarChTitle">小火鍋</span>
            <span class="sideBarEnTitle">HOTPOT</span>
          </div>
        </a>
        <a class="sideBarLink" @click.prevent="categoryHandler('早午餐')">
          <div :class="{'activeSideBar':category==='早午餐'}" class="sideBarBox">
            <span class="sideBarChTitle">早午餐</span>
            <span class="sideBarEnTitle">BRUNCH</span>
          </div>
        </a>
      </div>
    </div>

    <!-- storeMain -->
    <div class="storeMain">
      <transition-group
        v-if="productsFilter"
        class="storeProducts row"
        name="list"
        tag="div"
        mode="out-in"
        appear
      >
        <div
          class="storeProduct col-4 my-4"
          v-for="product in productsFilter"
          :key="product.storeName"
          @click="openModal(product)"
        >
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <span class="hook productHover"></span>
          <div class="productImg mt-4" :style="{backgroundImage:`url(${product.pic1})`}"></div>
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
      </transition-group>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">{{modalProduct.storeName}}</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span @click="n=0">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-5">
                  <div
                    ref="modalImg"
                    class="modalImg"
                    :style="{backgroundImage:`url(${modalProduct.pic1})`}"
                  >
                    <button class="nextPic" v-if="modalProduct.pic2" @click="nextPic">
                      <i class="fas fa-chevron-right"></i>
                    </button>
                    <button class="prePic" v-if="modalProduct.pic2" @click="prePic">
                      <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <div class="col-7">
                  <div class="productsScore mt-2">
                    <div class="productScoreBox">
                      <p class="scoreTitle">餐點 C P</p>
                      <div class="cpScore">
                        <div class="1star" v-if="modalProduct.foodCP==='1'">
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="2star" v-if="modalProduct.foodCP==='2'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="3star" v-if="modalProduct.foodCP==='3'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="4star" v-if="modalProduct.foodCP==='4'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="5star" v-if="modalProduct.foodCP==='5'">
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
                        <div class="1star" v-if="modalProduct.attitude==='1'">
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="2star" v-if="modalProduct.attitude==='2'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="3star" v-if="modalProduct.attitude==='3'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="4star" v-if="modalProduct.attitude==='4'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="5star" v-if="modalProduct.attitude==='5'">
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
                        <div class="1star" v-if="modalProduct.returnVisit==='1'">
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="2star" v-if="modalProduct.returnVisit==='2'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="3star" v-if="modalProduct.returnVisit==='3'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="4star" v-if="modalProduct.returnVisit==='4'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="5star" v-if="modalProduct.returnVisit==='5'">
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
                        <div class="1star" v-if="modalProduct.environment==='1'">
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="2star" v-if="modalProduct.environment==='2'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="3star" v-if="modalProduct.environment==='3'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="4star" v-if="modalProduct.environment==='4'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <div class="5star" v-if="modalProduct.environment==='5'">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="storeDetail">{{modalProduct.storeDetail}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer" v-if="uid">
            <button
              v-if="delOrAdd"
              @click="addToFavorite(modalProduct)"
              type="button"
              class="btn btn-danger"
            >加入收藏</button>
            <button
              v-else
              @click="delFavorite(modalProduct)"
              type="button"
              class="btn btn-secondary"
            >移除收藏</button>
          </div>
        </div>
      </div>
    </div>

    <!-- favorite -->
    <div @click="openFavoriteBox=!openFavoriteBox" class="favorite" v-if="uid">
      <i class="fas fa-heart"></i>
      <span class="favoriteLength">{{favoriteLength}}</span>
    </div>

    <!-- favoriteBox -->
    <div class="favoriteBox" :class="{'openFavoriteBox':openFavoriteBox}">
      <ul>
        <li
          class="my-1"
          @click="getFavorite(item)"
          v-for="(item,key) in userFavoriteFilter"
          :key="key"
        >
          {{item.storeName}}
          <span class="delFavoriteBtn" @click.stop="delFavorite(item)">&times;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import $ from "jquery";
export default {
  name: "store",
  data() {
    return {
      modalProduct: "",
      modalImg: [],
      n: 0,
      uid: $cookies.get("uid"),
      // userFavorite: "",
      openFavoriteBox: false,
      delOrAdd: ""
    };
  },
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    userFavorite() {
      return this.$store.state.userFavorite;
    },
    productsFilter() {
      this.$store.dispatch("setProductFilter");
      return this.$store.state.productsFilter;
    },
    userFavoriteFilter() {
      let data = Object.values(this.userFavorite);
      return data;
    },
    favoriteLength() {
      let num = this.userFavoriteFilter.length;
      return num;
    },
    isFavorites() {
      const vm = this;
      let arr = vm.userFavoriteFilter;
      let pArr = arr.map(item => {
        return item.productId;
      });
      return pArr;
    },
    category() {
      return this.$store.state.category;
    }
  },
  methods: {
    getProducts() {
      const vm = this;
      vm.$store.dispatch("getProducts");
    },
    openModal(p) {
      this.modalProduct = p;
      let pid = this.modalProduct.productId;
      let fArr = this.isFavorites;
      let findFavorite = fArr.find(item => {
        return item === pid;
      });
      findFavorite ? (this.delOrAdd = false) : (this.delOrAdd = true);
      this.modalImg = [];
      let pic1 = this.modalProduct.pic1;
      let pic2 = this.modalProduct.pic2;
      let pic3 = this.modalProduct.pic3;
      let arr = [pic1, pic2, pic3];
      // this.modalImg = [pic1, pic2, pic3];
      arr.forEach(item => {
        if (item) {
          this.modalImg.push(item);
        }
      });
      $("#productModal").modal("show");
    },
    nextPic() {
      let arrLength = this.modalImg.length;
      this.n = this.n + 1;

      if (this.n < arrLength) {
        this.$refs.modalImg.style.backgroundImage = `url(${
          this.modalImg[this.n]
        })`;
      } else {
        this.n = 0;
        this.$refs.modalImg.style.backgroundImage = `url(${this.modalImg[0]})`;
      }
    },
    prePic() {
      let arrLength = this.modalImg.length;
      if (this.n === 0) {
        this.n = arrLength - 1;
        this.$refs.modalImg.style.backgroundImage = `url(${
          this.modalImg[this.n]
        })`;
      } else {
        this.n = this.n - 1;
        this.$refs.modalImg.style.backgroundImage = `url(${
          this.modalImg[this.n]
        })`;
      }
    },
    getFavorites() {
      this.$store.dispatch("getFavorites");
    },
    addToFavorite(modalProduct) {
      const vm = this;
      let uid = vm.uid;
      this.delOrAdd = !this.delOrAdd;
      let storeName = modalProduct.storeName;
      let productId = modalProduct.productId;
      let data = {
        uid,
        storeName,
        productId
      };
      let api = `${process.env.VUE_APP_API}favorite/addToFavorite`;
      vm.$http.post(api, data).then(res => {
        if (res.data.success) {
          vm.getFavorites();
        }
      });
    },
    delFavorite(item) {
      const vm = this;
      this.delOrAdd = !this.delOrAdd;
      let pid = item.productId;
      let uid = vm.uid;
      let api = `${process.env.VUE_APP_API}favorite/delFavorite/${uid}/${pid}`;
      vm.$http.delete(api).then(res => {
        if (res.data.success) {
          vm.getFavorites();
        }
      });
    },
    getFavorite(item) {
      const vm = this;
      let pid = item.productId;
      let api = `${process.env.VUE_APP_API}favorite/getUserFavorite/${pid}`;
      vm.$http.get(api).then(res => {
        vm.openModal(res.data);
      });
    },
    categoryHandler(category) {
      this.$store.dispatch("categoryHandler", category);
    }
  },
  created() {
    this.getProducts();
    this.getFavorites();
  }
};
</script>

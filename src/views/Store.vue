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
                <div class="col-5 p-0 imgHidden">
                  <div ref="imgMove" class="imgMove" :style="{'width':imgHiddenWidth + 'px'}">
                    <div
                      ref="modalImg"
                      class="modalImg"
                      :style="{backgroundImage:`url(${modalProduct.pic1})`}"
                    ></div>
                    <div
                      ref="modalImg"
                      class="modalImg"
                      v-if="modalProduct.pic2"
                      :style="{backgroundImage:`url(${modalProduct.pic2})`}"
                    ></div>
                    <div
                      ref="modalImg"
                      class="modalImg"
                      v-if="modalProduct.pic3"
                      :style="{backgroundImage:`url(${modalProduct.pic3})`}"
                    ></div>
                  </div>
                  <button class="nextPic" v-if="modalProduct.pic2" @click="nextPic">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                  <button class="prePic" v-if="modalProduct.pic2" @click="prePic">
                    <i class="fas fa-chevron-right"></i>
                  </button>
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
      n: 0,
      uid: $cookies.get("uid"),
      openFavoriteBox: false,
      x: 0
    };
  },
  components: {
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    modalImg() {
      return this.$store.state.modalImg;
    },
    imgHiddenWidth() {
      let n = this.modalImg.length * 300;
      return n;
    },
    modalProduct() {
      return this.$store.state.modalProduct;
    },
    delOrAdd() {
      return this.$store.state.delOrAdd;
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
      this.$refs.imgMove.style.transform = `translateX(0)`;
      this.x = 0;
      let f = this.isFavorites;
      this.$store.dispatch("openModal", { p, f });
      $("#productModal").modal("show");
    },
    addToFavorite(modalProduct) {
      this.$store.dispatch("addToFavorite");
    },
    delFavorite(item) {
      this.$store.dispatch("delFavorite", item);
    },
    nextPic() {
      let n = this.imgHiddenWidth * -1;
      this.x = this.x - 300;
      if (this.x > n) {
        this.$refs.imgMove.style.transform = `translateX(${this.x}px)`;
      } else {
        this.x = 0;
        this.$refs.imgMove.style.transform = `translateX(${this.x}px)`;
      }
    },
    prePic() {
      let n = this.imgHiddenWidth * -1;
      this.x = this.x + 300;
      if (this.x > 0) {
        this.x = n + 300;
        this.$refs.imgMove.style.transform = `translateX(${this.x}px)`;
      } else {
        this.$refs.imgMove.style.transform = `translateX(${this.x}px)`;
      }
    },
    getFavorites() {
      this.$store.dispatch("getFavorites");
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
    },
    setUid() {
      this.$store.dispatch("setUid");
    }
  },
  created() {
    this.getProducts();
    this.setUid();
    this.getFavorites();
  }
};
</script>

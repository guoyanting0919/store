<template>
  <div class="index">
    <!-- preloader -->
    <div class="preloader">
      <div class="counter">0</div>
    </div>

    <!-- slider -->
    <div class="slider">
      <div
        class="slide slide1"
        @click="activeSlideHandler('slide1')"
        :class="{'activeSlide':this.activeSlide==='slide1'}"
      >
        <div class="content contentTxtBlack">
          <h2>早午餐</h2>
          <p @click="toStore">
            BRUNCH
            <i class="fa fa-angle-double-right"></i>
          </p>
        </div>
      </div>
      <div
        class="slide slide2"
        @click="activeSlideHandler('slide2')"
        :class="{'activeSlide':this.activeSlide==='slide2'}"
      >
        <div class="content contentTxtWhite">
          <h2>定食</h2>
          <p @click="toStore">
            MEALS
            <i class="fa fa-angle-double-right"></i>
          </p>
        </div>
      </div>
      <div
        class="slide slide3"
        @click="activeSlideHandler('slide3')"
        :class="{'activeSlide':this.activeSlide==='slide3'}"
      >
        <div class="content contentTxtWhite">
          <h2>燒烤</h2>
          <p @click="toStore">
            ROAST
            <i class="fa fa-angle-double-right"></i>
          </p>
        </div>
      </div>
      <div
        class="slide slide4"
        @click="activeSlideHandler('slide4')"
        :class="{'activeSlide':this.activeSlide==='slide4'}"
      >
        <div class="content contentTxtWhite">
          <h2>小吃</h2>
          <p @click="toStore">
            SNAKE
            <i class="fa fa-angle-double-right"></i>
          </p>
        </div>
      </div>
      <div
        class="slide slide5"
        @click="activeSlideHandler('slide5')"
        :class="{'activeSlide':this.activeSlide==='slide5'}"
      >
        <div class="content contentTxtBlack">
          <h2>甜點</h2>
          <p @click="toStore">
            DESSERT
            <i class="fa fa-angle-double-right"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      activeSlide: "slide3"
    };
  },
  methods: {
    logOutHandler() {
      this.$cookies.remove("uid");
      this.$router.push("/login");
    },
    signInHandler() {
      this.$router.push("/login");
    },
    counter() {
      let count = setInterval(function() {
        let c = parseInt($(".counter").text());
        $(".counter").text((++c).toString());
        if (c == 100) {
          clearInterval(count);
          $(".counter").addClass("counterHide");
          $(".preloader").addClass("preloaderHide");
        }
      }, 20);
    },
    activeSlideHandler(txt) {
      if (this.activeSlide === txt) {
        this.activeSlide = "";
      } else {
        this.activeSlide = txt;
      }
    },
    toStore() {
      this.$router.push("/store");
    }
  },
  created() {
    this.counter();
  }
};
</script>

<style>
</style>
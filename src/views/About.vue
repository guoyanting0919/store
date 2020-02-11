<template>
  <div class="about">
    <!-- banner -->
    <div class="banner">
      <div class="bannerBorder">
        <div class="bannerImg">
          <div class="bannerImgCover">
            <p class="bannerTxt">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <small>W</small>elcome To Our Store.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- timer -->
    <div class="timer">
      <div class="timerImgPadding">
        <div class="timerImgBox"></div>
      </div>
      <div class="timerTxt">
        <h2 class="timerTitle">- Since 1998 -</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptas illo blanditiis sequi, harum ipsam nulla dolorum nam eit consectetur adipisicing elit. Expedita voluptas illo blanditiis sequi, harum ipsam nulla dolorum nam eius dolt consectetur adipisicing elit. Expedita voluptas illo blanditiis sequi, harum ipsam nulla dlla dolorum namommos illo blands cs illo blanditiis sequi, har dolorum nam eit consectetur adipisicing elit. Expedita voluptas illo blanditiis sequi, harum ipsam nulla dolorum nam eius dolt consectetur adipisicing elit. Expedita voluptas illo blanditiis sequi, harum ipsam nulla dlla dolorum namommos illo blands cs illo blanditiis sequi, harum ipsam nulla dolorum nams illblanditiis sequi, harum ipsam nulla dolorum namommos illo blands sequi, harum ipsam nulolorum nam eius dolores sapiente ea labore cum perspiciatis cs illo blanditiis sequi, harum ipsam nulla dolorum nams illblanditiis sequi, harum ipsam nulla dolorum namommos illo blands cs illo blanditiis sequi, harum ipsam nulla dolorum nams illblanditiis sequi, harum ipsam nulla dolorum namommos illo blands sequi, harum ipsam nulla dolorum nams illo blanditiis sequi, harum ipsam nulla dolorum namdi architecto? Animi, minus dolorem?</p>
      </div>
    </div>

    <!-- slogan -->
    <div class="slogan">
      <div class="sloganLine"></div>
      <h5>「風格，才是個人穿搭最重要的事情。」</h5>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    let Pb = {};
    Pb.opacityZero = function(elementSeletor) {
      $(elementSeletor).css("opacity", 0);
      $(elementSeletor).css("transform", "translateY(-100px)");
    };
    Pb.appear = function(elementSeletor, duration = 1000) {
      $(window).scroll(function() {
        let scrollTop = $(this).scrollTop();
        let screenHight = $(this).height();
        let scrollBottom = scrollTop + screenHight;

        $(elementSeletor).each(function(index, element) {
          var top = $(element).offset().top;
          var height = $(element).height();
          var bottom = top + height / 2;
          if (scrollBottom >= bottom && scrollTop < bottom) {
            $(element).css("opacity", 1);
            $(element).css("transform", "translateY(0px)");
            $(element).css("transition", duration / 1000 + "s");
          } else {
            $(element).css("opacity", 0);
            $(element).css("transform", "translateY(-100px)");
            $(element).css("transition", duration / 1000 + "s");
          }
        });
      });
    };
    Pb.appear(".slogan", 1500);
    Pb.appear(".timerTitle", 1500);
    Pb.opacityZero(".slogan");
    Pb.opacityZero(".timerTitle");
  }
};
</script>

<style>
</style>
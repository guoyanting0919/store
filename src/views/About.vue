<template>
  <div class="about">
    <!-- banner -->
    <div class="banner">
      <div class="bannerImg">
        <div class="bannerImgCover">
          <div class="bannerTxtBox">
            <p ref="txt1" class="bannerTxt">美</p>
            <p ref="txt2" class="bannerTxt">食</p>
            <p ref="txt3" class="bannerTxt">˙</p>
            <p ref="txt4" class="bannerTxt">公道婆</p>
          </div>
        </div>
      </div>
    </div>

    <!-- history -->
    <div class="history">
      <div class="historyImgBox">
        <div class="historyImgCover">
          <h4 class="historyTxt">
            「吃到一半臨時決定來創帳號，哈。」
            <br />
            <span>2019.12.09</span>
          </h4>
        </div>
      </div>
    </div>

    <!-- snake -->
    <div class="snake">
      <div class="snakePic">
        <div class="img"></div>
      </div>
      <div class="snakeTxt">
        <p class="txtAniToggle">於此，記錄台灣各地美食。</p>
      </div>
    </div>

    <!-- brunch -->
    <div class="brunch">
      <div class="brunchTxt">
        <p class="txtAniToggle">無論是悠閒的早午餐...</p>
      </div>
      <div class="brunchPic">
        <div class="img"></div>
      </div>
    </div>

    <!-- roast -->
    <div class="roast">
      <div class="roastPic">
        <div class="img"></div>
      </div>
      <div class="roastTxt">
        <p class="txtAniToggle">還是精緻的燒烤...</p>
      </div>
    </div>

    <!-- dessert -->
    <div class="dessert">
      <div class="dessertPic1"></div>
      <div class="dessertTxt">
        <p class="txtAniToggle">亦或是孩子最愛的甜點、飲品</p>
      </div>
      <div class="dessertPic2"></div>
    </div>
    <!-- score -->
    <div class="score">
      <div class="scoreMainTitle">透過CARE標準評鑑，在乎您每次的用餐體驗。</div>
      <div class="costPerformance">
        <div class="iconBox">
          <i class="fas fa-dollar-sign"></i>
          <h4 class="scoreEnTitle">costPerformance</h4>
          <h3 class="scoreChTitle">CP值</h3>
        </div>
        <div class="stars mt-4">
          <p class="scoreDetail">
            又貴又難吃
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            低價難吃/高價食物普普
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            正常水平如同10元麥香
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            一周可以吃4天且不會吃土
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            吃土也要吃
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </div>
      </div>
      <div class="attitude">
        <div class="iconBox">
          <i class="fas fa-hands"></i>
          <h4 class="scoreEnTitle">attitude</h4>
          <h3 class="scoreChTitle">服務態度</h3>
        </div>
        <div class="stars mt-4">
          <p class="scoreDetail">
            不是口氣差就是沒刷牙
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            愛理不理，忘東忘西
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            請，謝謝，對不起
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            還會跟你聊天打屁
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            以為自己是皇帝
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </div>
      </div>
      <div class="returnVisit">
        <div class="iconBox">
          <i class="fas fa-car"></i>
          <h4 class="scoreEnTitle">returnVisit</h4>
          <h3 class="scoreChTitle">回訪意願</h3>
        </div>
        <div class="stars mt-4">
          <p class="scoreDetail">
            免費我也不要去
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            生日1折優惠給你1次機會
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            路過看到會想進去
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            不然下次聚會辦在這裡
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            颱風天出門也願意
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </div>
      </div>
      <div class="environment">
        <div class="iconBox">
          <i class="fas fa-utensils"></i>
          <h4 class="scoreEnTitle">environment</h4>
          <h3 class="scoreChTitle">用餐環境</h3>
        </div>
        <div class="stars mt-4">
          <p class="scoreDetail">
            昆蟲實境秀
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            隔壁桌可以安靜點嗎?
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            沒座位，只能外帶
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            鳥正面撞到玻璃
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </p>
          <p class="scoreDetail">
            雙方家長第一次見面，這裡可以
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </p>
        </div>
      </div>
    </div>

    <!-- slogan -->
    <div class="slogan">
      <!-- <div class="sloganLine"></div> -->
      <h5 class="sloganTxt txtAniToggle">「字裡行間，沒有修飾，難吃就是難吃。」</h5>
    </div>

    <!-- aboutFooter -->
    <div class="aboutFooterImg">
      <div class="footerImg">
        <div class="footerContainerBg">
          <div class="container-fluid">
            <div class="row h-100">
              <div class="col-12 col-lg-4 footerIcon">
                <i class="fab fa-facebook-square leftIcon"></i>
                <i class="fab fa-instagram leftIcon"></i>
                <i class="fab fa-line leftIcon"></i>
                <i class="fab fa-twitter-square leftIcon"></i>
              </div>
              <div class="col-12 col-lg-4 footerInfo">
                <p>
                  <i class="fas fa-map-marker-alt"></i>地址:桃園市蘆竹區福祿一街189號
                </p>
                <p>
                  <i class="fas fa-phone"></i>電話:03-3491223
                </p>
                <p>
                  <i class="far fa-envelope"></i>E-mail:logo@gmail.com
                </p>
              </div>
              <div class="col-12 col-lg-4 footerCopy">
                <p>個人練習作品，非商業用途。</p>
                <i class="fab fa-github"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  mounted() {
    // console.log(this.$refs.may.offsetHeight);
    setTimeout(() => {
      this.$refs.txt1.style.opacity = 1;
      this.$refs.txt2.style.opacity = 1;
      this.$refs.txt3.style.opacity = 1;
      this.$refs.txt4.style.opacity = 1;
    }, 2200);
    setTimeout(() => {
      $(".bannerImg").css("filter", "saturate(1.5)");
    }, 1000);
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
          if (scrollBottom >= bottom) {
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
    Pb.opacityZero(".txtAniToggle");
    Pb.appear(".txtAniToggle", 1500);
  }
};
</script>

<style>
</style>
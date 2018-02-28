<style lang="less">
/*
  #join-email { 
    background-clip: padding-box;
    border: 1px solid #ced4da;
    background-color: #ebf0f3;
    // margin:5px ;
    margin:10px;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #98a7b4;
    font-style: italic;
    text-align: left;
    min-height: 48px;
    width:260px;
    border-radius: 10px;
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    cursor: text;
    -webkit-tap-highlight-color: transparent;
    -webkit-writing-mode: horizontal-tb;
    text-rendering: auto;
  }
  #join-email:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
  }
  #join-btn {
    display: inline-block;
    margin: 10px;
    width: 260px;
    height: 60px;
    line-height: 60px;
    font-size: 30px;
    text-decoration: none;
    color: #000;
    background: rgba(0, 123, 255, .6);
    border-radius: 30px;
  }
*/
#page-home {
  @color-primary:#1ba5fd;
  color:#fff;
  h2 { color:@color-primary; }
  .card {  
    width:320px;
    img.avatar { display:block; margin:0 auto; }
    h3 { margin:21px 0; text-align:center; }
  }
  .panel { position:relative; margin:0 auto; width:1200px; }
  
  .addition img { display:block; margin:0 auto; }
  #news  {
    .card { height:auto; }
  }
  #about {
    p { margin:20px auto; width:900px; text-align:center; }
  }
  // #highlights {}
  #team {
    .card { 
      margin-bottom: 30px; padding: 18px 24px; width:300px; 
      .avatar { margin:0 auto; width:180px; height:180px; border-radius:90px; background:no-repeat center/cover; }
    }
  }
  #partners { 
    height:670px; background:url(~/assets/img/partners/bg.jpg) no-repeat center;
    h3 { margin:40px 0; }
    img+h3 { margin-top:60px; }
  }
  #contact {
    height:530px;
    .panel > div {
      padding-top:30px;
      // padding:30px 0;
      // float:left;
      h3 { margin-bottom:30px; font-size:30px; color:@color-primary; }
      .join { 
        h3 + p { margin:33px 0; }
        input {
          height:50px; line-height:1; font-size:24px; border:0 none; outline:0 none; border-radius:18px;
          &[type=email] { margin-right:20px; padding:0 25px; color:#333; }
          &[type=button] { padding:0 50px; color:#fff; background:@color-primary; cursor:pointer; }
        }
      }
      .social { 
        h3 { margin-top:100px; }
        a { position:relative; float:left; width:90px; height:90px; }
        a:before,
        a:after { position: absolute; top:0; left:0; width:100%; height:100%; background:no-repeat center; opacity:0; transition:300ms; content:'\200B'; }
        a:before { opacity:1; }
        a:hover:before { opacity:0; }
        a:hover:after { opacity:1; }
        a.wc:before { background-image:url(~assets/img/icons/wc.png); }
        a.qq:before { background-image:url(~assets/img/icons/qq.png); }
        a.em:before { background-image:url(~assets/img/icons/em.png); }
        a.sn:before { background-image:url(~assets/img/icons/sn.png); }
        a.fb:before { background-image:url(~assets/img/icons/fb.png); }
        a.wc:after  { background-image:url(~assets/img/icons/wc-focus.png); }
        a.qq:after  { background-image:url(~assets/img/icons/qq-focus.png); }
        a.em:after  { background-image:url(~assets/img/icons/em-focus.png); }
        a.sn:after  { background-image:url(~assets/img/icons/sn-focus.png); }
        a.fb:after  { background-image:url(~assets/img/icons/fb-focus.png); }
        a.wc i { 
          position:absolute; left:-80px; bottom:90px; padding:25px; width:250px; height:250px; 
          background:#eaeaea;
          /* background:#eaeaea url(~assets/img/icons/wc-qrcode.png) no-repeat center /200px auto;  */
          border:1px solid #ccc; border-radius:10px;
          // pointer-events:none; 
          visibility:hidden;
          opacity:0; transform:translate3d(0,-10px,0);
          transition-duration:300ms;
        }
        a.wc i img { display:block; width:200px; height:200px; }
        a.wc i:hover,
        a.wc:hover i { 
          // pointer-events:all; 
          visibility:visible;
          opacity:1; transform:translate3d(0,0,0) }
      }
      &.right {
        .timeline-Widget { background:#000; }
      }
    }
  }
}
</style>

<template>
  <div id="page-home">
    <!-- 首图 -->
    <div id="slideshow">
      <canvas id="canvas"></canvas>
      <!-- 占位 -->
      <div id="banner" class="anchor">
      </div>
      <div id="white-paper">
        <img src="~/assets/img/logo/logo-v-w.png" />
        <h1>{{slogan}}</h1>
        <div class="btn-group">
          <a id="white-paper-download" href="/whitepaper/ValPromise_WhitePaper_en_v1.3.7.pdf" target="_blank">White Paper</a>
          <a :class="navs[0].clsn" href="javascript:void(0)">{{navs[0].name}}</a>
        </div>
        <p>
          <a id="join-btn" href="https://t.me/ValPromise" target="_blank">{{joinGroup}}</a>
        </p>
      </div>
    </div>
    <!-- 新闻 -->
    <div id="news" class="gray">
      <div class="panel">
        <ul class="flex-dir-row">
          <li v-for="(n,i) in news" :key="`news${i}`">
            <a v-if="n.external"
              :href="n.link"
              class="card"
              target="_blank"
            ><img :src="n.img" ></a>
            <nuxt-link v-else
              :to="`${n.link}?lang=${lang}`"
              class="card"
              target="_blank"
            ><img :src="n.img" ></nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 关于 -->
    <div id="about" style="background:#0d0a19;">
      <div class="panel">
        <h2>{{about.title}}</h2>
        <p>{{about.desc}}
          <br>
          <br>
        </p>
        <img src="~/assets/img/chain.jpg" style="display:block; margin:0 auto;">
      </div>
    </div>
    <!-- 技术与平台 -->
    <div id="highlights" class="anchor">
      <div class="panel">
        <h2>{{highlights.title}}</h2>
        <div class="flex-dir-row justify-space-between">
          <div class="card" v-for="(h,i) in highlights.items" :key="`hl${i}`">
            <div class="icon" :style="`background-image:url(${h.img})`"></div>
            <div class="desc">
              <h3>{{h.title}}</h3>
              <p>{{h.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 天气产品 -->
    <div id="production" class="anchor" v-if="false">
      <div class="panel">
        <h2>{{production.title}}</h2>
        <p style="margin:-20px 0 40px 0; font-size:20px;">
          {{production.desc}}
        </p>
        <ul class="flex-dir-row justify-space-between">
          <li v-for="(p,i) in production.items" :key="`prod${i}`">
            <h3>{{p.title}}</h3>
            <div class="border"></div>
            <p>{{p.desc}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 团队 -->
    <div id="team" class="anchor">
      <div class="panel">
        <h2>{{team.title}}</h2>
        <div class="flex-dir-row">
          <div class="card" v-for="(m,i) in team.items" :key="`m${i}`">
            <div class="avatar" :style="`background-image:url(${m.avatar})`"></div>
            <h3>{{m.name}}</h3>
            <p>{{m.desc}}</p>
          </div>
          <!-- <div class="avatar flex-dir-row justify-space-between flex-1">
            <div class="item" :class="i===0?'focus':''" v-for="(m,i) in team.items" :key="`member-${i}`">
              <div :style="`background:url(${m.avatar}) no-repeat center`"></div>
              <h3>{{m.name}}</h3>
            </div>
          </div>
          <div class="intro flex-dir-row flex-1">
            <p :class="i===0?'show':''" v-for="(m,i) in team.items" :key="`member-intro-${i}`">
              <b v-html="m.title"></b>
              <br>{{m.desc}}
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div id="team-background" class="addition">
      <div class="panel">
        <h2>{{team.background.title}}</h2>
        <img :src="team.background.institutions" alt="">
      </div>
    </div>
    <!-- 顾问 -->
    <div id="advisor" class="anchor">
      <div class="panel">
        <h2>{{advisor.title}}</h2>
        <div class="flex-dir-row justify-space-around">
          <div class="card" v-for="(a,i) in advisor.items" :key="`adv${i}`">
            <div class="avatar" :style="`background-image:url(${a.avatar});`"></div>
            <img class="avatar" :src="a.avatar" alt="">
            <h3>{{a.name}}</h3>
            <p style="text-align:center;">{{a.desc}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 投资人 -->
    <div id="investor" class="anchor addition">
      <div class="panel">
        <h2>{{investors.title}}</h2>
        <img :src="investors.institutions" alt="">
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div id="partners" class="anchor">
      <div class="panel">
        <h2>{{partners.title}}</h2>
        <h3>{{partners.institutions.title}}</h3>
        <img :src="partners.institutions.trademark" alt="">
        <h3>{{partners.enterprise.title}}</h3>
        <img :src="partners.enterprise.trademark" alt="">
      </div>
    </div>
    <!-- 路线图 -->
    <div id="roadmap" class="anchor">
      <div class="panel">
        <h2>{{roadmap.title}}</h2>
        <img :class="roadmap.img[platform].clsn" :src="roadmap.img[platform].src" alt="">
      </div>
    </div>
    <!-- 联系我们 -->
    <div id="contact">
      <div class="panel flex-dir-row">
        <div class="left flex-3">
          <div class="join">
            <h3>{{contact.join.title}}</h3>
            <p>{{contact.join.desc}}</p>
            <input type="email" :placeholder="contact.join.placeholder" />
            <input type="button" :value="contact.join.btn" />
          </div>
          <div class="social">
            <h3>{{contact.social.title}}</h3>
            <a href="https://t.me/ValPromise" target="_blank" class="icon fb"></a>
            <a href="javascript:void(0)" class="icon wc"><i><img src="~/assets/img/icons/wc-qrcode.png" alt=""></i></a>
            <a href="mailto:hi@valp.io" class="icon em"></a>
          </div>
        </div>
        <div class="right flex-2">
          <a class="twitter-timeline" href="https://twitter.com/Valpromise?ref_src=twsrc%5Etfw" 
            data-theme="dark" 
            data-height="440"
            data-chrome="noheader nofooter noborders transparent"
          >Tweets by Valpromise</a> 
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer1 />
    <!-- 弹窗 -->
    <div id="dialog-raising">
      <div id="raising-fill-wrapper" class="outer-wrapper">
        <i class="btn-close"></i>
        <div class="inner-wrapper">
          <h2>{{presale.title}}</h2>
          <h4>{{presale.desc}}</h4>
          <form class="form">
            <div class="item-wrapper row">
              <div class="input-text-wrapper">
                <input type="text" name="userName" :placeholder="presale.name.placeholder" required/>
                <b>*</b>
                <b class="warning">{{presale.name.warning}}</b>
              </div>
              <div class="input-text-wrapper">
                <input type="text" name="nation" :placeholder="presale.nation.placeholder" required/>
                <b>*</b>
                <b class="warning">{{presale.nation.warning}}</b>
              </div>
              <div class="input-text-wrapper">
                <input type="text" name="email"  :placeholder="presale.email.placeholder" required/>
                <b>*</b>
                <b class="warning">{{presale.email.warning}}</b>
              </div>
              <div class="input-text-wrapper">
                <input type="tel" name="mobile" :placeholder="presale.phone.placeholder" required autocomplete="off"/>
                <b>*</b>
                <b class="warning">{{presale.phone.warning}}</b>
              </div>
              <div class="input-text-wrapper">
                <input type="text" name="telegramId" :placeholder="presale.telegram.placeholder" />
              </div>
              <div class="input-text-wrapper">
                <input type="text" name="wechat" :placeholder="presale.wechat.placeholder" />
              </div>
            </div>
            <div class="item-wrapper textarea-wrapper">
              <h4>{{presale.projects.title}} <b>*</b></h4>
              <textarea cols="30" rows="10" name="investProjects" required></textarea>
              <b class="warning">{{presale.projects.warning}}</b>
            </div>
            <div class="item-wrapper textarea-wrapper">
              <h4>{{presale.institution.title}} </h4>
              <textarea cols="30" rows="10" name="institutionName"></textarea>
            </div>
            <div class="item-wrapper file-outer-wrapper" style="display:none;">
              <div class="file-inner-wrapper" id="file-wrappr-1">
                <h4>{{presale.file.passport.title}} <b>*</b></h4>
                <p>{{presale.file.passport.desc}}</p>
                <div id="pickfiles1"></div>
                <input type="text" name="passportImgUrl" value="null" />
              </div>
              <div class="file-inner-wrapper" id="file-wrappr-2">
                <h4>{{presale.file.institution.title}} <b>*</b></h4>
                <p>{{presale.file.institution.desc}}</p>
                <div id="pickfiles2"></div>
                <input type="text" name="institutionImgUrl" value="null" />
              </div>
            </div>
            <div class="item-wrapper input-text-wrapper">
              <h4>{{presale.wallet.title}} <b>*</b></h4>
              <input type="text" name="walletAccount" :placeholder="presale.wallet.placeholder" required />
              <b class="warning">{{presale.wallet.warning}}</b>
            </div>
            <div class="item-wrapper input-text-wrapper amount">
              <h4>{{presale.amount.title}} <b>*</b></h4>
              <input type="number" name="investmentAmounts" min="1" max="5000" placeholder="1~5000" required />
              <span class="unit">{{presale.amount.unit}}</span>
              <p class="explain">{{presale.amount.desc}}</p>
              <b class="warning">{{presale.amount.warning}}</b>
            </div>
            <div class="item-wrapper input-checkbox-wrapper">
              <input type="checkbox" id="raising-promise" required />
              <label for="raising-promise">{{presale.promise.title}} <b>*</b></label>
              <b class="warning">{{presale.promise.warning}}</b>
            </div>
          </form>
          <input type="button" id="raising-submit" class="disabled" value="Submit" />
        </div>
      </div>
      <div id="raising-result-wrapper" class="outer-wrapper failure">
        <i class="btn-close"></i>
        <div class="inner-wrapper success">
          <div class="success">
            <img src="~/assets/img/icons/success.png" >
            <h3>{{presale.result.success.title}}</h3>
            <p>{{presale.result.success.desc}}</p>
            <input class="raising-done btn-close" type="button" value="OK" />
          </div>
          <div class="failure">
            <img src="~/assets/img/icons/failure.png" >
            <h3>{{presale.result.failure.title}}</h3>
            <p>{{presale.result.failure.desc}}</p>
            <input class="raising-done btn-close" type="button" value="Close" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initializer from '~/assets/js/init'
import { mapState } from 'vuex'
import contact from '~/components/layout/contact'
import footer1 from '~/components/layout/footer'
export default {
  data() {
    return {
    } 
  },
  computed: {
    // ...mapState(['lang'])
    platform () {
      return typeof window === 'object'? window._platform: 'pc'
    },
    ...mapState({
      platform  :state=>state.platform,
      lang      :state=>state.lang.lang,
      langs     :state=>state.lang.langs,
      navs      :state=>state.lang.navs,
      slogan    :state=>state.lang.slogan,
      joinGroup :state=>state.lang.joinGroup,
      news      :state=>state.lang.news,
      about     :state=>state.lang.about,
      highlights:state=>state.lang.highlights,
      production:state=>state.lang.production,
      roadmap   :state=>state.lang.roadmap,
      team      :state=>state.lang.team,
      advisor   :state=>state.lang.advisor,
      investors :state=>state.lang.investors,
      partners  :state=>state.lang.partners,
      contact   :state=>state.lang.contact,
      presale   :state=>state.lang.presale,
    })
  },
  beforeCreatez() {
    if ( this.$route.query.lang ) {
      this.$store.commit('setLanguage', this.$route.query.lang.trim());
    }
    try {
      this.$store.commit( 
        'setPlatform', 
        navigator.userAgent.match(/iPhone|iPad|Android|iPod|iOS/i)?'mobile':'pc'
      );
    } catch(e) {
    }
  },
  mounted() {
    initializer($);
  },
  components: {
    contact, footer1
  }
}
</script>



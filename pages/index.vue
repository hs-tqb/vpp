<style lang="less">
@color-primary:#1ba5fd;
#page-home {
  color:#fff;
  h2 { color:@color-primary; }
  .card {  
    width:320px;
    img.avatar { display:block; margin:0 auto; }
    h3 { margin:21px 0; text-align:center; }
  }
  .panel { position:relative; margin:0 auto; }
  .addition img { display:block; margin:0 auto; }
  
  #news  {
    .card { height:auto; }
  }
  #about {
    p { margin:20px auto; width:900px; text-align:center; }
  }
  #highlights {
    .card { width:370px; }
  }
  #team {
    .card { 
      margin-bottom:30px; width:25%; padding:18px 24px;
      .avatar { margin:0 auto; width:160px; height:160px; border-radius:90px; background:no-repeat center/cover; }
    }
  }
  #advisor {
    .card { padding:18px 0; }
  }
  #partners { 
    height:670px; background:url(~/assets/img/partners/bg.jpg) no-repeat center/cover;
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
        div { 
          position:relative; 
          span { 
            position:absolute; top:60px; left:5px; 
            &.invalid,
            &.failed { color:#f56c6c; }
            &.successful { color:#67c23a; }
          }
        }
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
.mobile #page-home {
  h3 { padding:0 18px; }
  .card  { width:100%; padding:18px 10px; }
  .panel { width:100%; }
  #news {
    .card {  padding:0; }
  }
  #white-paper h1 { font-size:30px; }
  #about p { padding:0 15px; width:auto; }
  #team .card { width:100%; padding:18px 10px; }
  #partners { height:470px; }
  #contact {
    height:auto;
    .panel { 
      text-align:center; 
      > div {
        h3 { margin-bottom:10px;  padding:0 18px; }
        .join {
          p { margin:25px; line-height:1.2; }
          input[type=email] { width:90%; margin:0; }
          input[type=button] { margin-top:25px; }
          span { left:6%; top:58px; }
        }
        .social { 
          h3 {margin-top:40px; }
          div { display:flex; flex-direction:row; justify-content:space-around; }
          a { float:none; }
        }
      }
    }
  }
  #footer { display:none; }

}
  .alertify-notifier.ajs-bottom ajs-right,
  .ajs-message.ajs-visible { box-sizing:content-box; color:#212529; font-family:TitilliumWeb; }
  #alertify-fixed-para {
    font:inherit;
    text-align:inherit;
    color:inherit;
  }
  #alertify-fixed-btn { 
    display:block;
    margin:15px 10px 0 10px;
    line-height:48px;
    text-align:center; color:@color-primary; border:1px solid @color-primary; 
    font-size: 1.125rem;
    // padding: 0.5rem 2.9rem;
    border-radius:30px;
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
          <a id="white-paper-download" href="/whitepaper/ValPromise_WhitePaper_en_v1.3.7.pdf" target="_blank">{{whitePaper}}</a>
          <a :class="navs[0].clsn" :href="navs[0].link" target="_blank">{{navs[0].name}}</a>
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
    <!-- 应用场景 -->
    <div id="realization" class="addition">
      <div class="panel">
        <h2>{{realization.title}}</h2>
        <img :src="realization.img" alt="">
      </div>
    </div>
    <!-- 天气产品 -->
    <div id="production" class="anchor">
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
    <!-- 团队背景 -->
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
    <!-- 联系我们/注册 -->
    <div id="contact">
      <div class="panel flex-dir-row">
        <div class="left flex-3">
          <div class="join">
            <h3>{{contact.join.title}}</h3>
            <p>{{contact.join.desc}}</p>
            <div>
              <input type="email" :placeholder="contact.join.placeholder" v-model.trim="email.value" @input="emailInput"/>
              <input type="button" :value="contact.join.btn" @click="register"/>
              <span :class="email.note">{{contact.join.note[email.note]}}</span>
            </div>
          </div>
          <div class="social">
            <h3>{{contact.social.title}}</h3>
            <div>
              <a href="https://t.me/ValPromise" target="_blank" class="icon fb"></a>
              <a href="javascript:void(0)" class="icon wc"><i><img src="~/assets/img/icons/wc-qrcode.png" alt=""></i></a>
              <a href="mailto:hi@valp.io" class="icon em"></a>
            </div>
          </div>
        </div>
        <div class="right twitter flex-2">
          <template v-if="docMounted">
          <a class="twitter-timeline" href="https://twitter.com/Valpromise?ref_src=twsrc%5Etfw" 
            data-theme="dark" 
            data-height="440"
            data-chrome="noheader nofooter noborders transparent"
          >Tweets by Valpromise</a> 
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </template>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <footer1 />
    <!-- 弹窗 -->
    <!-- <div id="dialog-raising">
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
    </div> -->
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
      docMounted:false,
      email:{
        value:'',
        note :'',
        hasChange:false,
        // invalid:'无效邮箱',
        // failed:'发送失败',
        // successful:'注册成功',
      }
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
      whitePaper:state=>state.lang.whitePaper,
      joinGroup :state=>{
        if (typeof window === 'object') {
          window._joinGroupBtn = state.lang.joinGroup;
        }
        return state.lang.joinGroup;
      },
      news      :state=>state.lang.news,
      about     :state=>state.lang.about,
      highlights:state=>state.lang.highlights,
      realization:state=>state.lang.realization,
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
  methods: {
    emailInput() {
      // if ( this.email.value )
      this.email.note = '';
      this.email.hasChange = true;
    },
    register() {
      if ( !this.email.value || !this.email.hasChange ) return;
      this.email.hasChange = false;
      if ( !/[a-zA-Z0-9][a-zA-Z0-9-_.]*@[a-zA-Z0-9]+\.[a-zA-Z]+/.test(this.email.value) ) {
        return this.email.note = 'invalid';
      }
      $.ajax({
        type:'post',
        url :'http://bot.valp.io/botMail/insertBotMail',
        data:{ email:this.email.value },
        success:(resp)=> {
          if ( resp.state === 1 ) {
            this.email.note = 'successful';
            alertify.message('<span style="color:#67c23a">'+this.contact.join.note.successful+'</span>');
          } else {
            this.email.note = 'failed';
          }
        },
        error:()=>{
          this.email.note = 'failed';
        }
      })
    }
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
    this.docMounted = true;
    // if ( typeof window ==='object' ) {
    //   alertify.dismissAll();
    //   alertify.message(
    //     `<p id="alertify-fixed-para" >Make new friends! </p>
    //     <a id="alertify-fixed-btn" href="https://t.me/ValPromise" target="_blank">${this.joinGroup}</a>`
    //   , 0)
    // }
  },
  components: {
    contact, footer1
  }
}
</script>



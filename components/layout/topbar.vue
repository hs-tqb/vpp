<style lang="less">
  #topbar { 
    position:fixed; top:0; left:0; z-index:100;
    width:100%; height:80px; 
    font-size:20px; line-height:80px; color:#fff;
    transition:all 300ms;
    overflow:hidden;
    /* background-color:rgba(0,0,0,0.3); */
    &.dark { background:rgba(0,0,0,0.7) }

    .menuSwitch { display:none;  }
    #logo { width:215px; height:100%; background:url(~assets/img/logo/logo-h-b.png) no-repeat 20px center/152.6px auto; }
    #nav { height:100%; font-size:15px; }
    #nav li a { display:block; padding:0 24px; transition:300ms; }
    #nav li a:hover,
    #nav li a.focus { color:#00a0e9; }
    #func { float:right; }
  }
  .mobile #topbar #nav { height:100vh; }
</style>

<template>
  <div id="topbar" class="collapsed" style="background:rgba(0,0,0,0)">
    <a class="fl" href="javascript:void(0)" data-anchor="banner" id="logo"></a>
    <ul id="nav" class="fr flex-dir-row">
      <!-- 
      <li><a href="javascript:void(0)" data-anchor="technical">Highligts</a></li>
      <li><a href="javascript:void(0)" data-anchor="insurance">Weather Insurance</a></li>
      <li><a href="javascript:void(0)" data-anchor="roadmap">Roadmap</a></li>
      <li><a href="javascript:void(0)" data-anchor="team">Team</a></li>
      <li><a id="showRaising" href="javascript:void(0)">KYC</a></li>
       -->
       <li v-for="(n,i) in lang.navs" :key="`nav${i}`">
          <a :href="n.link||'javascript:void(0)'" :data-anchor="n.anchor" :target="n.external?'_blank':''">{{n.name}}</a>
       </li>

      <!-- <li><a href="/zh">中文</a></li> -->
      <li v-for="(l,i) in lang.langs" :key="`lang${i}`">
        <!-- <nuxt-link class="btn-lang" :to="`?lang=${l.type}`">{{l.name}}</nuxt-link> -->
        <a class="btn-lang" href="javascript:void(0);" @click="setLang(l.type)">{{l.name}}</a>
      </li>
    </ul>
    <a class="menuSwitch" href="javascript:void(0);"></a>
  </div>
</template>

<script>

export default {
  computed: {
    lang() {
      return this.$store.state.lang
    }
  },
  methods: {
    setLang(t) {
      this.$store.commit('setLanguage', t);
      this.$router.push('/?lang='+t);
    }
  }
}
</script>



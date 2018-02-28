<style lang="less">

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
          <a href="javascript:void(0)" :data-anchor="n.anchor" :class="n.clsn">{{n.name}}</a>
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
    num() {
      return this.$store.state.num
    },
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



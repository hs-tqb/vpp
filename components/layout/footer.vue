<style lang="less">
  #footer { 
    .panel > div {
      background:url(~/assets/img/icons/logo-gray.png) no-repeat center; 
    }
    ul {
      // &:nth-child(1) {float:left}
      // &:nth-child(2) {}
      a { display:block; padding:0 35px; line-height:130px; font-size:24px; color:#999; }
    }
    p { margin-top:20px; font-size:16px; text-align:center; color:#e6e6e6;  }
  }
</style>

<template>
  <div id="footer">
    <div class="panel">
      <div class="flex-dir-row justify-space-between">
        <ul class="flex-dir-row">
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Home</a></li>
        </ul>
        <ul class="flex-dir-row">
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Home</a></li>
          <li><a href="javascript:void(0);">Home</a></li>
        </ul>
      </div>
      <p>Copyright © 2018 QunQun Lab Foundation Ltd. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

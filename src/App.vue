<template>
  <div class="nav_block">
    <!-- <router-link to="/">主页</router-link> &nbsp|&nbsp
    <router-link to="/copybook">书法字帖</router-link>&nbsp|&nbsp
    <router-link to="/children">少儿书法教育</router-link>&nbsp|&nbsp
    <router-link to="/university">大学书法教育</router-link>&nbsp|&nbsp
    <router-link to="/theory">书法教育理论</router-link>&nbsp|&nbsp
    <router-link to="/tech">科技与书法</router-link>&nbsp|&nbsp
    <router-link to="/communicate">学习与交流</router-link>&nbsp|&nbsp -->
    <!-- <router-link to="/about">关于</router-link> -->
   <div class="block">
    <div class="nav_left">
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">硬笔书法</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
    </div>
    <div class="nav_right">
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
    </div>
    </div>
  </div>
  
  <router-view/>
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav_block {
  line-height: 35px;
    height: 35px;
    font-size: 14px;
   transition: all 0.2s ease-out 0s;
    overflow: hidden;
  background: #94070a;
    color: #d39797;
  padding: 10px;
}

.block{
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  position: relative;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
}
.link{
  margin-left: 30px;
  cursor: pointer;
}
</style>



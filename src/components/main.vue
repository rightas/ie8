<template>
  <div class="main" id="main">
    <!-- 总头部 -->
    <header>
      <ul class="operation">
        <li>语言切换    {{ langMap.get(language) }}</li>
        <li>
          <el-dropdown @command="switchLang"
                       size="medium"
                       class="ml-30"
                       :style="{ color: '#fff',fontWeight: '500',fontSize:'15px' }">
            <span class="el-dropdown-link"
                  :style="{ fontWeight: '500',fontSize:'15px' }">
            <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">English</el-dropdown-item>
              <el-dropdown-item command="zh">简体中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </header>
    <div id="main-content">
      <!-- 左侧导航 -->
      <div class="main-nav">
        <el-row class="tac">
        </el-row>
      </div>
      <!-- 内容 -->
      <div class="main-center">
         <div class="login">{{$t('login')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { langMap } from "@/map.js";
export default {
  name: "main",
  data () {
    return {
      userName: '张三',
      langMap,
    }
  },
  methods: {
    switchLang (command) {
      this.$store.dispatch("app/setLanguage", command);
    },
  },
  computed: {
    ...mapGetters(["language"]),
    currentPath () {
      return this.$router.currentRoute.name
    }
  },

}
</script>
<style scoped>
.login{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size:36px;
}
* {
  padding: 0;
  margin: 0;
}
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 头部 */
header {
  width: 100%;
  height: 60px;
  background-color: #2f9688;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 60px;
}
header .title {
  float: left;
  margin-left: 20px;
  margin-top: -4px;
}
header .operation {
  list-style: none;
  float: right;
  margin-right: 20px;
  margin-top: 0;
}
header .operation > li {
  float: left;
  margin-right: 10px;
}
#main-content {
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: calc(100% -60px);
}
/* 左导航 */
#main-content .main-nav {
  background-color: #545c64;
  color: #333;
  flex: 0 0 200px;
  width: 200px;
  overflow-y: auto;
  /* background: url(../assets/peonybg.jpg) no-repeat;
  background-size: cover; */
}
#main-content .main-nav .tac {
  width: 100%;
}
#main-content .el-menu {
  border-right: none;
}
/* 内容 */
.main-center {
  color: #333;
  flex: 1;
  overflow-y: hidden;
  box-sizing: border-box;
  position: relative;
  height: 100%;

}
.eqirementStart span,
.eqirementStart i {
  color: rgb(255, 208, 75);
}
</style>


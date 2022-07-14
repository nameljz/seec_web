<template>
  <div class="home">
    <el-container>
      <el-aside class="aside">
        <!-- 菜单 -->
        <el-row class="tac">
          <el-col>
            <el-menu
              router
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :collapse="isCollapse"
            >
              <!-- default-active 当前激活菜单的索引 -->
              <!-- open close submenu 展开和收起触发的事件 -->
              <!-- 二级菜单 -->
              <el-menu-item index="/home/index">
                <i class="el-icon-location"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <!-- 导航二 -->
              <el-menu-item index="/home/document">
                <i class="el-icon-menu"></i>
                <span slot="title">文档</span>
              </el-menu-item>
              <el-menu-item index="/home/lead">
                <i class="el-icon-document"></i>
                <span slot="title">引导页</span>
              </el-menu-item>
              <!-- 二级菜单 -->
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">权限测试页</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1">页面权限</el-menu-item>
                  <el-menu-item index="4-2">指令权限</el-menu-item>
                  <el-menu-item index="4-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="5">
                <i class="el-icon-document"></i>
                <span slot="title">图标</span>
              </el-menu-item>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">组件</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="6-1">页面权限</el-menu-item>
                  <el-menu-item index="6-2">指令权限</el-menu-item>
                  <el-menu-item index="6-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">图表</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="7-1">页面权限</el-menu-item>
                  <el-menu-item index="7-2">指令权限</el-menu-item>
                  <el-menu-item index="7-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">路由嵌套</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="8-1">页面权限</el-menu-item>
                  <el-menu-item index="8-2">指令权限</el-menu-item>
                  <el-menu-item index="8-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">Table</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="9-1">页面权限</el-menu-item>
                  <el-menu-item index="9-2">指令权限</el-menu-item>
                  <el-menu-item index="9-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="10">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">综合实例</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="10-1">页面权限</el-menu-item>
                  <el-menu-item index="10-2">指令权限</el-menu-item>
                  <el-menu-item index="10-3">角色权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- 路由 -->
      <el-container>
        <router-view>
          <!-- <el-header>Header</el-header>
                    <el-main>Main</el-main> -->
        </router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import instance from "@/api/api";
export default {
  name: "HomeView",
  created() {
    //  /api/aa  ==> 127.0.0.1:2222/aa
    instance.get("/aa").then((res) => {
      // console.log(res)
    });
    // instance.post("/ab",{name:"zz"}).then(res => console.log(res))
  },
  data() {
    return {
      isCollapse: false, // aside是否折叠
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  .aside {
    margin: 0;
    padding: 0;
    .el-menu-vertical-demo {
      height: 100vh;
      .el-menu-item:hover{
        background: #303133 !important;
      }
    }
    .el-submenu_title:hover{
      // 修改二级菜单的背景色
      background: #303133 !important;
    }
  }
}
</style>
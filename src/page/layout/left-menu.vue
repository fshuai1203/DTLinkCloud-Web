<template>
  <div class="left-menu">
    <el-menu
        class="el-menu"
        mode="vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="defaultOpeneds"
        :collapse-transition="false">
      <template v-for="(item, index) in menuList">
        <!-- 主菜单项 -->
        <router-link :to="resolvePath(item.path)" v-if="!item.children && !item.hidden" :key="index">
          <el-menu-item :index="index">
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>
        <!-- 有子菜单项的菜单 -->
        <el-submenu v-if="item.children && !item.hidden" :key="index" :index="index + ''">
          <template slot="title">
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(subItem, subIndex) in item.children">
            <router-link :to="resolvePath(item.path, subItem.path)" v-if="!subItem.hidden && !subItem.children"
                         :key="subIndex">
              <el-menu-item :index="index + '-' + subIndex">
                <span slot="title">{{ subItem.name }}</span>
              </el-menu-item>
            </router-link>
            <!-- 三级子菜单 -->
            <el-submenu v-if="subItem.children && !subItem.hidden" :key="subIndex" :index="index + '-' + subIndex">
              <template slot="title">
                <span>{{ subItem.name }}</span>
              </template>
              <router-link :to="resolvePath(item.path, subItem.path, subSubItem.path)"
                           v-for="(subSubItem, subSubIndex) in subItem.children" :key="subSubIndex">
                <el-menu-item :index="index + '-' + subIndex + '-' + subSubIndex" v-if="!subSubItem.hidden">
                  <span slot="title">{{ subSubItem.name }}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {menuList} from '../../router/menuList';

export default {
  data() {
    return {
      menuList: [],
      defaultOpeneds: ['0','1', '2', '3']
    };
  },
  mounted() {
    this.menuList = menuList;
  },
  methods: {
    // 确保路径是绝对路径的函数
    resolvePath(...paths) {
      return '/' + paths.filter(Boolean).join('/').replace(/\/+/g, '/');
    }
  }
};
</script>

<style>

</style>

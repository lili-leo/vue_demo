/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from  'vue-router'
import Main from '../pages/Main/Main'
import Class from '../pages/Class/Class'
import Patent from '../pages/Patent/Patent'
import Creative from '../pages/Creative/Creative'
import Message from '../pages/Message/Message'
import Connection from '../pages/Connection/Connection'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Forgetmm from '../pages/Forgetmm/Forgetmm'
import Notfount from '../components/Notfount/Notfount'
/*专利详情页*/
import Details from '../pages/Details/Details' //专利详情
import Particulars from "../pages/Particulars/Particulars"  //创意详情

import Profile from "../pages/Profile/Profile"  //个人中心
//patents 我的专利
//data  修改密码
//inform 消息通知
//account 账户信息


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",
  //配置应用所有路由
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: '/main',
      component: Main,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/forgetmm',
      component: Forgetmm,
    },
    {
      path: '/class',
      component:Class,
      meta:{
        isShowheader:true,
        isShow:true
      },
      children:[
        {
          path: "/",
          redirect: "/introduce",

        },

        {
          path: '/introduce',
          name: '公司介绍',
          component: (resolve)=> {require(['@/pages/Class/Introduce/Introduce.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/mu',
          name: '公司目标/理念',
          component: (resolve)=> {require(['@/pages/Class/Mu/Mu.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/serve',
          name: '我们的服务',
          component: (resolve)=> {require(['@/pages/Class/Serve/Serve.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/advantage',
          name: '我们的优势',
          component: (resolve)=> {require(['@/pages/Class/Advantage/Advantage.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/case',
          name: '成功案例',
          component: (resolve)=> {require(['@/pages/Class/Case/Case.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/run',
          name: '运营模式',
          component: (resolve)=> {require(['@/pages/Class/Run/Run.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
      ]
    },

    {
      path: '/patent',
      component:Patent,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/details',
      component:Details,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/particulars',
      component:Particulars,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/creative',
      component:Creative,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/message',
      component:Message,
      meta:{
        isShowheader:true,
        isShow:true
      },
      children:[
        {
          path: "/",
          redirect: "/all",

        },

        {
          path: '/all',
          name: '全部',
          component: (resolve)=> {require(['@/pages/Message/All/All.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/firm',
          name: '企业资讯',
          component: (resolve)=> {require(['@/pages/Message/Firm/Firm.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/industry',
          name: '行业资讯',
          component: (resolve)=> {require(['@/pages/Message/Industry/Industry.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },

      ]
    },
    {
      path: '/connection',
      component:Connection,
      meta:{
        isShowheader:true,
        isShow:true
      }
    },
    {
      path: '/register',
      component:Register
    },
    // {
    //   path: "*",
    //   component: Notfount
    // },
    {
      path: '/profile',
      component:Profile,
      meta:{
        isShowheader:true,
        isShow:true
      },
      children:[
        {
          path: "/",
          redirect: "/patents",

        },

        {
          path: '/patents',
          name: '我的专利',
          component: (resolve)=> {require(['@/pages/Profile/Patents/Patents.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/data',
          name: '修改密码',
          component: (resolve)=> {require(['@/pages/Profile/Data/Data.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/inform',
          name: '消息通知',
          component: (resolve)=> {require(['@/pages/Profile/Inform/Inform.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },
        {
          path: '/account',
          name: '消息通知',
          component: (resolve)=> {require(['@/pages/Profile/Account/Account.vue'], resolve) },
          meta:{
            isShowheader:true,
            isShow:true
          },
        },

      ]
    },
  ]
})


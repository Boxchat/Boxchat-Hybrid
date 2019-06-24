<template>
  <div id="menu-list">
    <div class="for">
    
    <div class="group van-hairline--bottom" v-for="(item, index) in menuContent" :key="index">
      <div class="list" v-for="(item, index) in item.list" :key="index">
        <van-icon 
          :name="item.icon"
          size="21px"
          color="gray"
        />
        <div class="list-content">
          {{item.name}}
        </div>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // menuContent: [['新建群组','新建电台'],['联系人','收藏夹', '邀请朋友', '设置', '软件声明']],
      menuContent: [
        {
          group: 1,
          list: [{
            name: '新建群组',
            icon: 'friends-o'
          },
          {
            name: '新建电台',
            icon: 'tv-o'
          }]
        },
        {
          group: 2,
          list: [{
            name: '联系人',
            icon: 'user-circle-o'
          },
          {
            name: '收藏夹',
            icon: 'label-o'
          },
          {
            name: '邀请朋友',
            icon: 'smile-o'
          },
          {
            name: '设置',
            icon: 'setting-o'
          },
          {
            name: '软件声明',
            icon: 'info-o'
          }]
        }
      ]
    }
  },
  computed: {
    len_menuContent () {
      return this.menuContent.length
    }
  }
}
</script>


<style lang="scss" scoped>
#menu-list {
  width: 100%;
  height: 75vh;
  // background-color: red;
  // padding-left: 5%;
  box-sizing: border-box;
  &::before {
    content: "";
    display: table;
  }
}

.group {
  border-bottom: 1px solid #e3e2e2;
  margin-top: 1.5vh;
}

.list {
  font-weight: bold;
  padding-left: 4vw;
  padding-bottom: 2.3vh;
  padding-top: 2.3vh;
  display: flex;
}

// .list-icon-img {
//   font-size: 23px;
// }

.list-content {
  margin-left: 6vw;
  font-size: 15px;
}
</style>


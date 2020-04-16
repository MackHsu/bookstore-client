<template>
  <el-card class="box-card">
    <img src="../assets/bookcover.webp" :alt="name" class="book-img" />
    <div class="book-title">{{name}}</div>
    <div class="book-author">作者：{{author}}</div>
    <hr />
    <div class="book-desc">简介：{{desc}}</div>
    <el-button>添加购物车</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    name: String,
    author: String,
    desc: String
  }
}
</script>

<style scoped>
img {
  width: 120px;
  height: auto;
  margin: 5px;
}

hr {
  margin-left: 130px;
}

.book-img {
  float: left;
}

.book-title {
  font-size: 30px;
  font-weight: bold;
  text-align: start;
}

.book-author {
  font-size: 15px;
  text-align: start;
}

.book-desc {
  padding: 5px;
  font-size: 18px;
  text-align: start;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.box-card {
  margin: 30px;
}
</style>

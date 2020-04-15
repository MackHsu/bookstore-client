<template>
  <div>
    <nav class="navbar navbar-light border-bottom mt-1">
      <a class="navbar-brand" href="#">BookStore</a>
      <ul class="nav nav-fill nav-pills">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="($route.path==='/store')? 'active' : 'text-muted'"
            href="#/store"
          >商城</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="($route.path==='/cart')? 'active': 'text-muted'"
            href="#/cart"
          >购物车</a>
        </li>
      </ul>
      <!-- <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
      </form> -->
      <a href="#/">
      <span></span>
        <i class="iconfont icon-denglu"></i>
        登录/注册
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
</style>

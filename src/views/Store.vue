<template>
  <div class="store">
    <el-row gutter="20">
      <BookCard
        v-for="(book, index) in books.slice(
          (pageIndex - 1) * 10,
          pageIndex * 10
        )"
        :key="index"
        :name="book.name"
        :author="book.author"
        :desc="book.desc"
      />
    </el-row>

    <el-pagination
      layout="prev, pager, next"
      :total="books.length"
      :page-size="10"
      :hide-on-single-page="false"
      @current-change="changePage"
    ></el-pagination>
    currentpage: {{ pageIndex }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookCard from "../components/BookCard.vue";
export default {
  name: "Store",

  data() {
    return {
      pageIndex: 1
    };
  },

  components: {
    BookCard
  },

  computed: {
    ...mapState({
      books: state => state.Books.books
    })
  },

  methods: {
    changePage(currentPage) {
      this.pageIndex = currentPage;
      scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
a {
  color: #d55e4b;
  text-decoration: none;
  cursor: pointer;
}

a:hover,
a:focus,
a:active {
  text-decoration: underline;
}

h1,
h2 {
  line-height: 1.2;
  font-family: "Source Sans Pro", sans-serif;
}

p {
  margin: 1em 0;
}

/* structure */
.container {
  max-width: 720px;
  padding: 20px 40px 0;
  margin: 0 auto;
  background: #fff;
  color: #333;
  font: 16px/1.4 Open Sans, Helvetica, Arial, sans-serif;
}

.site-box {
  overflow: hidden;
  padding: 40px 60px 0;
  margin: 0 0 3em;
  background: #fff;
  text-align: center;
  box-shadow: 2px 4px 6px 1px rgba(50, 50, 50, 0.14);
}

.site-footer {
  width: 85%;
  margin: 0 auto;
}

.logo {
  text-align: center;
}
.icon-logo {
  max-width: 48px;
}
.pen {
  height: 10em;
}
.title {
  margin-bottom: 40px;
  font-size: 2.6em;
}

.tagline {
  margin: 0 0 0.75em;
  font-size: 1.4em;
  color: #154b8ab0;
  letter-spacing: 0.1em;
}

.ngroup {
  display: flex;
  margin: 3em -10px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.book {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 15px 2em;
  padding: 0.5em;
  width: 80px;
  height: 112px;
  box-shadow: 2px 4px 6px 1px rgba(50, 50, 50, 0.14);
}
.book.blank {
  height: 1px;
  visibility: hidden;
}

/**
 * Calls to action
 */

.cta-option {
  position: relative;
  display: inline-block;
  /* IE6/7 inline-block hack */
  *display: inline;
  *zoom: 1;

  margin: 1.5em 0.75em 0.5em;
  vertical-align: bottom;
}

/**
 * Utilities
 */

.txt-small {
  font-size: 0.75em;
}

.txt-large {
  font-size: 1.25em;
}

.txt-mute {
  color: #999;
}

@media screen and (max-width: 700px) {
  .read-more {
    float: none;
    display: block;
    margin: 0 0 1em;
    line-height: 1.2;
  }
}

@media screen and (max-width: 540px) {
  .container {
    padding: 20px;
    font-size: 0.875em;
  }
  .site-box {
    padding: 30px 30px 0;
  }

  .cta-option {
    margin-left: 0;
    margin-right: 0;
  }

  .share-bar {
    margin-left: -30px;
    margin-right: -30px;
    text-align: center;
  }

  .share-opt {
    float: none;
    display: inline-block;
    margin: 0 1em 0.5em;
  }

  .book {
    margin: 0 2px 2em;
  }
}
</style>


<template>
  <div class="container">
    <div class="site-box">
      <div class="hgroup">
        <div class="logo">
          <img class="pen" :src="$withBase(frontmatter.logo)" alt="笔记" />
        </div>
        <h1 class="title">{{frontmatter.title}}</h1>
        <h2 class="tagline">{{frontmatter.describe}}</h2>
      </div>
      <div class="ngroup">
        <template v-for="book in frontmatter.books">
          <a class="book" :href="book.href">
            <div class="logo">
              <img class="icon-logo" :src="$withBase(book.logo)" />
            </div>
            <div class="name">{{ book.name }}</div>
          </a>
        </template>
        <div class="book blank"></div>
        <div class="book blank"></div>
        <div class="book blank"></div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  computed: {
    frontmatter() {
      const { frontmatter } = this.$page;
      return frontmatter;
    }
  }
};
</script>

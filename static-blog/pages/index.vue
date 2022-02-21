<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
    <article
      class="mb-2 pt-2 border-b leading-6 pb-1 font-mono text-5xl scale-150"
    >
      <h1 class="text-5xl font-extrabold text-gray mb-2 mt-3 pb-1 leading-6">
        blog
      </h1>
    </article>
    <article>
      <section
        class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8"
      >
        <article
          v-for="post in posts"
          :key="post.slug"
          class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"
          ></div>
          <div
            class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
          >
            <h3 class="text-center">
              <a
                class="text-white text-2xl font-bold text-center"
                :href="'/posts/' + post.slug"
              >
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
          </div>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  asyncData({ payload }) {
    return { posts: payload }
  },
  methods: {},
}
</script>

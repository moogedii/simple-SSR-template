<template>
  <article class="grid grid-cols-12 pb-24">
    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <div class="col-start-4 col-span-6 w-full">
        <div>
          <NuxtLink to="/" href="/" class="block text-gray-400 mt-8"
            >← Go Back</NuxtLink
          >
          <article class="w-full h-full bg-cover bg-center leading-9 font-sans">
            <h1 class="text-5xl font-black mt-2">{{ post.title }}</h1>
            <p class="pt-3 mt-3">{{ post.content }}</p>
          </article>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  asyncData({ payload }) {
    if (payload) return { post: payload }
  },
}
</script>

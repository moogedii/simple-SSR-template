<template>
  <li
    class="transition-all duration-500 ease-in-out border rounded-md px-0 pb-0"
  >
    <div class="px-1 py-1">
      <a :href="'/posts/' + post.slug" class="pb-1">
        <div class="px-3 py-2">
          <ul class="flex space-x-3 mt-2">
            <li class="text-gray-600 font-bold">
              {{ post.published }}
            </li>
          </ul>
          <h2 class="text-3xl font-semibold">{{ post.title }}</h2>
          <h5 class="flex space-x-3 mt-1 pt-0 text-gray-400">
           
          </h5>
        </div>
        <div
          class="mb-1 mx-0 pb-0 px-0 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-0"
        >
          <div class="px-3 pt-0 pb-2">
            <p>
              <small>
                {{ contentPreview }}
              </small>
            </p>
          </div>
        </div>
      </a>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    post: Object,
  },
  computed: {
    contentPreview() {
      return this.post.content.substring(0, 220).concat('... ')
    },
  },
}
</script>

<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div v-if="!authStore.loading && authStore.user" class="dropdown">
    <div tabindex="0" role="button" class="btn m-1">
      <div v-if="authStore.user.image" class="avatar">
        <div class="w-6 rounded-full">
          <img :src="authStore.user.image" :alt="authStore.user.name">
        </div>
      </div>
      {{ authStore.user.name }}
    </div>
    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <NuxtLink to="/sign-out">
          <Icon name="tabler:logout-2" size="22" />
          Sign Out
        </NuxtLink>
      </li>
    </ul>
  </div>
  <button v-else :disabled="authStore.loading" class="btn btn-accent" @click="authStore.signIn">
    Sign In With GitHub
    <Icon name="tabler:brand-github" size="22" />
  </button>
</template>

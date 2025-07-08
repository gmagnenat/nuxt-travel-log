<script setup lang="ts">
const authStore = useAuthStore();
const { loading, signIn } = authStore;
</script>

<template>
  <button :disabled="loading" class="btn btn-accent" @click="signIn">
    Sign In With GitHub
    <span v-if="loading" class="loading loading-spinner loading-sm" />
    <Icon v-else name="tabler:brand-github" size="22" />
  </button>
</template>

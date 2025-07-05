<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end flex gap-2">
      <AppThemeToggle />
      <a href="#" class="btn btn-accent">
        Login With GitHub
        <Icon name="tabler:brand-github" size="22" />
      </a>
    </div>
  </div>
</template>

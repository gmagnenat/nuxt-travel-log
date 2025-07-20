<script lang="ts" setup>
const props = defineProps<{
  label: string;
  icon: string;
  href: string;
  showLabel: boolean;
}>();
</script>

<template>
  <div
    :class="cn(
      'tooltip-right',
      !showLabel ? 'tooltip' : undefined,
    )"
    :data-tip="showLabel ? undefined : props.label"
  >
    <NuxtLink
      :to="props.href" :class="cn(
        'flex gap-2 p-2 hover:bg-base-300 hover:cursor-pointer flex-nowrap',
        !showLabel ? 'justify-center' : 'justify-start',
      )"
    >
      <Icon :name="props.icon" size="24" />
      <Transition name="grow">
        <span v-if="showLabel">{{ props.label }}</span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.1s;
}
.grow-leave-active {
  animation: grow 0.1s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<template>
  <div>
    <header>
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </header>
    <slot v-if="open"><p>No content</p></slot>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return {
      open: true
    };
  }
};
</script>

<style scoped>
header {
  background-color: gray;
  padding: 3px;
  cursor: pointer;
}
</style>

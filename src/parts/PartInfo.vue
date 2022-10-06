<template>
  <div>
    <h1>{{ part.title }}</h1>
    <p>{{ part.description }}</p>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: {
      type: String
    },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      const { id, partType } = this;

      return parts[partType].find((part) => part.id === Number(id));
    }
  }
};
</script>

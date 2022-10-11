<template>
  <div>
    <h1>{{ part.title }}</h1>
    <p>{{ part.description }}</p>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
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

      return this.parts[partType].find((part) => part.id === Number(id));
    }
  }
};
</script>

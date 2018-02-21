<template>
  <div >
    <h1>Create An Item</h1>
    <form>
      <div class="form-group">
        <label>Item Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="item.name"
          />
      </div>

      <div class="form-group">
        <label>Item Price:</label>
        <input
          type="number"
          class="form-control"
          v-model="item.price"
          />
      </div>

      <button
        class="btn btn-primary"
        @click.prevent="addItem"
        :disabled="disabledButton"
        >Add Item</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateItem',

  data () {
    return {
      item: {
        name: '',
        price: '',
      },
    }
  },

  computed: {
    disabledButton () {
      return !this.item.name || !this.item.price;
    },
  },

  methods: {
    addItem () {
      this.axios.post('http://localhost:4000/items/add', this.item)
        .then(response => this.$router.push({ name: 'DisplayItem' }));
    },

  },
}
</script>

<style>
</style>

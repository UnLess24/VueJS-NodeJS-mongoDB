<template>
  <div >
    <h1>Update Item</h1>

    <div class="col-10">
      <router-link :to="{ name: 'DisplayItem' }" class="btn btn-success">
        Return to Items
      </router-link>
    </div>

    <div class="col-10">
      <form @submit.prevent="updateItem">
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
          :disabled="disabledButton"
          >Update</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'EditItem',

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

  created () {
    this.getItem();
  },

  methods: {
    getItem () {
      this.axios.get('http://localhost:4000/items/edit/' + this.$route.params.id)
        .then(response => this.item = response.data);
    },

    updateItem () {
      this.axios.post('http://localhost:4000/items/update/' + this.$route.params.id, this.item)
        .then(response => this.$router.push({ name: 'DisplayItem' }));
    },

  },
}
</script>

<style>
</style>

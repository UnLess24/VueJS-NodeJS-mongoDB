<template>
  <div class="row">
    <h1>Items</h1>

    <div class="col-10">
      <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary float-right">Create Item</router-link>
    </div>

    <table class="table table-hover table-striped table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th style="width: 50px;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item._id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="btn-group">
              <router-link :to="{ name: 'EditItem', params: { id: item._id} }"
                class="btn btn-primary">Edit</router-link>
              <button class="btn btn-danger"
                @click="deleteItem(item)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DisplayItem',

  data () {
    return {
      items: [],
    }
  },

  created () {
    this.fetchItems();
  },

  methods: {
    deleteItem (item) {
      this.axios.get('http://localhost:4000/items/delete/' + item._id)
        .then(response => {
          const index = this.items.indexOf(item);
          this.items.splice(index, 1);
        })
        .catch(error => console.log(error));
    },

    fetchItems () {
      this.axios.get('http://localhost:4000/items')
        .then(response => this.items = response.data)
        .catch(error => console.log(error));
    },
  },
}
</script>

<style>
</style>

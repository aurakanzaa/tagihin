<template>
  <v-ons-page>
    <div class="tabbar tabbar--top tabbar--material">
      <label class="tabbar__item tabbar--material__item">
        <input type="radio" name="tabbar-material-a" checked="checked">
        <button class="tabbar__button tabbar--material__button">
          Tess
        </button>
      </label>

      <label class="tabbar__item tabbar--material__item">
        <input type="radio" name="tabbar-material-a">
        <button class="tabbar__button tabbar--material__button">
          Tes
        </button>
      </label>
</div>
  </v-ons-page>
</template>

<script>
  export default {
    name : 'TabSample',
  }
</script>

<style scoped>
    .centered-form{
      display: flex;
      align-items: center;
      height: 10em;
      justify-content: center;
    }
</style>

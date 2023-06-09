<template></template>

<script setup lang="ts">
import { useStore } from 'vuex'

export interface StateProps {
  books: BookDocument.Volume[]
  listOfBooks: BookDocument.Volume[]
  favoritesBooks: BookDocument.Volume[]
  totalBooks: Number
  query: String
  personalizeSite: {
    typeSearch: String
    typePagination: String
  }
}

const store = useStore<StateProps>()

onMounted(() => {
  return console.log(store.state.totalBooks)
})
</script>

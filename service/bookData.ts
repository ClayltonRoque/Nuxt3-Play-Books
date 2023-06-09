// import { StateProps as StateBook } from '~/store/bookData'
// export interface StateProps {
//   bookData: StateBook
// }
// interface booksRequestApi {
//   items: []
//   kind: string
//   totalItems: number
// }

// export function useBookData() {
//   const books = computed(() => {
//     return this.$store.state.bookData.books
//   })

//   const listOfBooks = computed(() => {
//     return this.$store.state.bookData.listOfBooks
//   })

//   const favoriteBooks = computed(() => {
//     return this.$store.state.bookData.favoritesBooks
//   })

//   const totalBooks = computed(() => {
//     return this.$store.state.bookData.totalBooks
//   })

//   const querySearch = computed(() => {
//     return this.$store.state.bookData.query
//   })

//   const personalization = computed(() => {
//     return this.$store.state.bookData.personalizeSite
//   })

//   const state = reactive({
//     personalizeType: {
//       typeSearch: 'Titulo',
//       typePagination: 'Paginação Simples',
//     },
//   })

//   async function getDataBooks(
//     query: string,
//     startIndex = 0,
//     resetList?: boolean,
//     maxResults = 20
//   ) {
//     this.$store.commit('bookData/SAVE_BOOKS', [])
//     this.$store.commit('bookData/QUERY_SEARCH', query)
//     const { data, error } = await useLazyFetch<booksRequestApi>(
//       'https://www.googleapis.com/books/v1/volumes',
//       {
//         params: {
//           q: !query
//             ? 'Livros Famosos'
//             : this.$store.state.bookData.personalizeSite.typeSearch + query,
//           maxResults,
//           startIndex,
//         },
//       }
//     )
//     if (!data.value.items) {
//       data.value.items = []
//     }

//     if (!startIndex) {
//       this.$store.commit('bookData/TOTAL_BOOKS', data.value.totalItems)
//     }
//     if (resetList === false) {
//       this.$store.commit('bookData/SAVE_BOOKS_IN_LIST', data.value.items)
//     } else {
//       store.commit('bookData/RESET_BOOKS_IN_LIST', [])
//     }

//     this.$store.commit('bookData/SAVE_BOOKS', data.value.items)

//     if (error) {
//       console.log('Não foi possível buscar informações com o servidor')
//     }
//     console.log(data.value)
//   }

//   function saveBooks(favoriteBook: BookDocument.Volume) {
//     this.$store.commit('bookData/SAVE_BOOKS_FAVORITES', favoriteBook)
//   }

//   function removeBook(favoriteBook: BookDocument.Volume) {
//     this.$store.commit('bookData/REMOVE_BOOK_FAVORITES', favoriteBook)
//   }

//   function alreadyfavorite(book: BookDocument.Volume) {
//     const favoriteBook = this.$store.state.bookData.favoritesBooks.find(
//       (item) => item.id === book.id
//     )
//     return favoriteBook
//   }

//   function personalizeSite(personalizeSite: StateBook['personalizeSite']) {
//     if (personalizeSite.typeSearch === 'Titulo') {
//       state.personalizeType.typeSearch = 'intitle:'
//     }
//     if (personalizeSite.typeSearch === 'Autor') {
//       state.personalizeType.typeSearch = 'inauthor:'
//     }
//     if (personalizeSite.typeSearch === 'ISBN') {
//       state.personalizeType.typeSearch = 'isbn:'
//     }

//     if (personalizeSite.typePagination === 'Paginação Simples') {
//       state.personalizeType.typePagination = 'Paginação Simples'
//     }

//     if (personalizeSite.typePagination === 'Rolagem Infinita') {
//       state.personalizeType.typePagination = 'Rolagem Infinita'
//     }

//     const personalizeType = { ...state.personalizeType }

//     this.$store.commit('bookData/PERSONALIZE_SITE', personalizeType)
//   }

//   return {
//     books,
//     listOfBooks,
//     favoriteBooks,
//     totalBooks,
//     querySearch,
//     personalizeSite,
//     personalization,
//     alreadyfavorite,
//     getDataBooks,
//     saveBooks,
//     removeBook,
//   }
// }

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Розгорнуто проєкт React+Vite https://vitejs.dev/guide/
2. Фейк апі з постами. https://jsonplaceholder.typicode.com/guide/
3. Пробуємо реалізувати наші пости в звичному режимі:

- створити феч функцію;
- використовуємо юз еффект щоб отримати результат запиту при монтуванні компоненту.
- отримаємо данні спочатку в консолі терміналу.
- зберігаємо в юз стейт результат в then()
- компонент з юз стейту отримує колекцію і рендерить список
- зробити лоудер

а тепер подивимось на реакт квері

- npm i @tanstack/react-query
- створемо клієнта
- тепер нам не требв useEffect, useState, закоментуємо
- const result = useQuery(); перший ключ, другий функція
- консолимо результат і бачимо як багато нам повертає useQuery() ({…}
  data
  :
  Array(100)
  dataUpdatedAt
  :
  (...)
  error
  :
  (...)
  errorUpdateCount
  :
  (...)
  errorUpdatedAt
  :
  (...)
  failureCount
  :
  (...)
  failureReason
  :
  (...)
  fetchStatus
  :
  (...)
  isError
  :
  (...)
  isFetched
  :
  (...)
  isFetchedAfterMount
  :
  (...)
  isFetching
  :
  (...)
  isInitialLoading
  :
  (...)
  isLoading
  :
  (...)
  isLoadingError
  :
  (...)
  isPaused
  :
  (...)
  isPending
  :
  (...)
  isPlaceholderData
  :
  (...)
  isRefetchError
  :
  (...)
  isRefetching
  :
  (...)
  isStale
  :
  (...)
  isSuccess
  :
  (...)
  refetch
  :
  (...)
  status
  :
  (...))
- деструктурезуємо результат і оримаємо const {
  data: posts = [],
  isLoading,
  isError,
  } = useQuery({
  queryKey: ["postsList"],
  queryFn: fetchPosts,
  });

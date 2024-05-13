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

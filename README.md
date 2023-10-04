<div align="center">

  <img src="./assets/20231003_165559_0000.png" alt="logo" width="200" height="auto" />
  <h1>React QWhy</h1>
    <p> React QWhy A React library for fetch data fast and easy! </p>
  <br/>
  
   If you like react-qwhy, please give us a star and if you want to be contributor we will be grateful to you!

<br/>

<!-- Badges -->
<p>
  
  <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/aliel0malki/react-qwhy/build-and-test.yml?label=tests">

  <img alt="GitHub Workflow Status (with event)" src="https://img.shields.io/github/actions/workflow/status/aliel0malki/react-qwhy/publish.npm.yml?style=flat-square&label=npm publish">

  <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/aliel0malki/react-qwhy/main?style=flat-square">

<img alt="GitHub Release Date - Published_At" src="https://img.shields.io/github/release-date/aliel0malki/react-qwhy?style=flat-square">

<img alt="npm" src="https://img.shields.io/npm/dm/react-qwhy?style=flat-square">

<img alt="NPM" src="https://img.shields.io/npm/l/react-qwhy?style=flat-square">

<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-qwhy?style=flat-square">

<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/aliel0malki/react-qwhy?style=flat-square">

<img alt="npm" src="https://img.shields.io/npm/v/react-qwhy?style=flat-square">

<img alt="GitHub forks" src="https://img.shields.io/github/forks/aliel0malki/react-qwhy?style=flat-square">

</p>

🚧  IMPORTANT  🚧

> react-qwhy is not ready to production, if you make a mistake, you are responsible

  <br/>

  <br/>

<h4>
 <span></span>
    <a href="https://github.com/aliel0malki/react-qwhy">Documentation</a>
  <span> · </span>
    <a href="https://github.com/aliel0malki/react-qwhy/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/aliel0malki/react-qwhy/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->

# ⚛️ Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#works-on)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
- [Usage](#usage)
  - [Returned Values](#options)
  - [Example](#example)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- About the Project -->

## About the Project

I've used React Query a lot... really, it's a great library, but how much time does it take to finish the setup?
This is the problem. That's where React QWhy comes in !

<!-- TechStack -->

### Works On

  <ul>
    <li><a href="https://react.dev/">REACT</a></li>
    <li><a href="https://nextjs.org/">NEXT JS</a></li>
    <li><a href="https://gatsby.dev/">GATSBY</a></li>
    <li>Any Framework built-on React</li>
  </ul>

<!-- Features -->

### Features

- Esay to Use 🧠
- Incredibly Fast 🚀
- Scalable & Timeless in Development 🕛

<!-- Getting Started -->

## Getting Started

<!-- Prerequisites -->

### Prerequisites

This project Built-in React

```bash
  npm i react
```

<!-- Installation -->

### Installation

Install react-qwhy with npm

```bash
  npm install react-qwhy
```

Install react-qwhy with yarn

```bash
  yarn add react-qwhy
```

Install react-qwhy with pnpm

```bash
  pnpm add react-qwhy
```

<!-- Running Tests -->

### Running Tests

To run tests, run the following command

```bash
  npm run test
```

<!-- Run Locally -->

### Fork

Clone react-qwhy repo

```bash
  git clone https://github.com/aliel0malki/react-qwhy.git
```

Go to the react-qwhy directory

```bash
  cd react-qwhy
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<!-- Usage -->

## Usage

Here's how to use it

```typescript
import { useQuery } from "react-qwhy";

function yourComponent() {
  ...
  // return important values
  const {} = useQuery()
  ...
  return ...;
}
```

## useQuery Return

| Variable    | Return                               |
| ----------- | ------------------------------------ |
| `status`    | `number`                             |
| `isLoading` | `boolean`                            |
| `error`     | `any`                                |
| `data`      | `<ResultProps>` or `<ResultProps[]>` |

## Example

```typescript
import { useQuery } from "react-qwhy";

// todo interface //
type TodoProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  /*
   * Fetch todo/1 from [ JsonPlaceholder ]
   * Pass a TodoProps as generic to useQuery()
   */
  const { error, status, isLoading, data } = useQuery<TodoProps>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  // When fetch progress, display h1 written in it "loading..." //
  if (isLoading) return <h1>loading...</h1>;

  // return the component //
  return (
    <>
      <h1>react-qwhy</h1>
      <hr />
      {data && (
        <div id="cont">
          <h1>{data?.title}</h1>
          <h5>completed? {data?.completed ? "Yes" : "No"}</h5>
          <h5>{data?.id}</h5>
          <span>{data?.userId}</span>
        </div>
      )}
    </>
  );
}

export default App;
```

<!-- Roadmap -->

## Roadmap

- [ ] useMutation => add, delete, put, the data 🔥
- [ ] State Management for < useQuery & useMutation > 🐐
- [ ] OPP & Support

<!-- Contributing -->

## Contributing

<a href="https://github.com/aliel0malki/react-qwhy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aliel0malki/react-qwhy" />
</a>

Contributions are always welcome! 😇

See `contributing.md` for ways to get started.

<!-- FAQ -->

## FAQ

- it's work on react-native?

  - sorry, no for now... maybe tomorrow! 😉

- why I use this instead of react-query?
  - Use whatever you want. 🤷

<!-- License -->

## License

Distributed under the no License. See LICENSE.txt for more information.

<!-- Contact -->

## Contact

Ali Elmalki - [@npm](https://www.npmjs.com/~alielmalki) - alielmalki.developer@gmail.com

Project Link: [https://github.com/aliel0malki/react-qwhy](https://github.com/aliel0malki/react-qwhy)

<!-- Acknowledgments -->

## Acknowledgements

useful resources and libraries we have used in react-qwhy.

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev)
- [RollUp](https://rollup.dev)

<div align="center">

  <img src="./assets/20231003_165559_0000.png" alt="logo" width="200" height="auto" />
  <h1>React QWhy</h1>
  
  <p> React QWhy A React library for fetch data fast and easy! </p>
  <br/>

## version 0.2.4

  <br/>
  <br/>
  If you like react-qwhy, please give us a star and if you want contributor we will be grateful to you! 😎
<!-- Badges -->
<p>
  ![test passed](https://github.com/aliel0malki/react-qwhy/actions/workflows/build-and-test.yml/badge.svg)
  <a href="https://github.com/aliel0malki/react-qwhy/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/aliel0malki/react-qwhy" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/aliel0malki/react-qwhy" alt="last update" />
  </a>
  ![production](https://github.com/aliel0malki/react-qwhy/actions/workflows/publish.npm.yml/badge.svg)
  <a href="https://github.com/aliel0malki/react-qwhy/network/members">
    <img src="https://img.shields.io/github/forks/aliel0malki/react-qwhy" alt="forks" />
  </a>
  <a href="https://github.com/aliel0malki/react-qwhy/stargazers">
    <img src="https://img.shields.io/github/stars/aliel0malki/react-qwhy" alt="stars" />
  </a>
  <a href="https://github.com/aliel0malki/react-qwhy/issues/">
    <img src="https://img.shields.io/github/issues/aliel0malki/react-qwhy" alt="open issues" />
  </a>
  <a href="https://github.com/aliel0malki/react-qwhy/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/aliel0malki/react-qwhy.svg" alt="license" />
  </a>
</p>
   
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
- [Tech Stack](#tech-stack)
- [Features](#dart-features)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Running Tests](#test_tube-running-tests)
- [Usage](#eyes-usage)
  - [Returned Values](#options)
  - [Example](#example)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## About the Project

I've used React Query a lot... really, it's a great library, but how much time does it take to finish the setup?
This is the problem. That's where React QWhy comes in !

<!-- TechStack -->

### 🛰 Tech Stack

<details>
  <summary>JUST REACT</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next ts || React ts</a></li>
    <li><a href="https://tailwindcss.com/">React js || Next js</a></li>
  </ul>
</details>

<!-- Features -->

### 🚀 Features

- Esay to Use ♻️
- Incredibly Fast 🚀
- Scalable & Timeless in Development 🕛

<!-- Getting Started -->

## 🧰 Getting Started

<!-- Prerequisites -->

### 🪡 Prerequisites

This project Built in React as a library

```bash
  npm i react react-dom
```

<!-- Installation -->

### ⚓ Installation

Install react-qwhy with NPM

```bash
  npm install react-qwhy
```

Install react-qwhy with Yarn

```bash
  yarn install react-qwhy
```

Install react-qwhy with PNPM

```bash
  pnpm install react-qwhy
```

<!-- Running Tests -->

### 🧪 Running Tests

To run tests, run the following command

```bash
  npm run test
```

<!-- Run Locally -->

### 🚧 Run Locally

Clone react-qwhy src

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

## Usage 🐐

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

## ❔️ Options

Three values are returned (for now)
`status`,`isLoading`, `error` and `data`

<hr/>
`status` return `number`
<br/>
`isLoading` return `boolean`
<br/>
`error` return `any`
<br/>
`data` return `generic`
<br/>

## Here's Example 🥚

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

## Roadmap 🛣

- [ ] useMutation => add, delete, put, the data 🔥
- [ ] State Management for < useQuery & useMutation > 🐐
- [ ] OPP & Support

<!-- Contributing -->

## Contributors 👑

<a href="https://github.com/aliel0malki/react-qwhy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=aliel0malki/react-qwhy" />
</a>

Contributions are always welcome! 😇

See `contributing.md` for ways to get started.

<!-- FAQ -->

## FAQ 🤔

- it's work on react-native?

  - sorry, no for now... maybe tomorrow! 😉

- why I use this instead of react-query?
  - Use whatever you want. 🤷

<!-- License -->

## ⚠️ License

Distributed under the no License. See LICENSE.txt for more information.

<!-- Contact -->

## 🖐 Contact

Ali Elmalki - [@npm](https://www.npmjs.com/~alielmalki) - alielmalki.developer@gmail.com

Project Link: [https://github.com/aliel0malki/react-qwhy](https://github.com/aliel0malki/react-qwhy)

<!-- Acknowledgments -->

## 💎 Acknowledgements

useful resources and libraries we have used in react-qwhy.

- [React](https://react.dev/)
- [Vite](hhttps://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [RollUp](https://rollup.com/)
- [Shields.io](https://shields.io/)

import { useQuery } from "../dist/index";

// todo interface //
type TodoProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// fetch function //
const fetchTodos = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos");
  const res = await req.json();
  return res;
};

function App() {
  /*
   * Fetch todos from [ JsonPlaceholder ]
   * Pass TodoProps as [] to useQuery()
   * Pass a name & query function to useQuery()
   */

  const { data, isLoading } = useQuery<TodoProps[]>("fetch_todos", fetchTodos);

  // When fetch progress, display h1 written in it "loading..." //
  if (isLoading) return <h1>loading...</h1>;

  // return the component //
  return (
    <>
      <h1>react-qwhy</h1>
      <hr />
      <ul data-testid="data-cont">
        {data?.map((todo) => (
          <li key={todo.id}>
            <h1>{todo.title}</h1>
            <h5>completed? {todo.completed ? "Yes" : "No"}</h5>
            <h5>{todo.id}</h5>
            <span>{todo.userId}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

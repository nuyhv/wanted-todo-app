import { styled } from "styled-components";
import { Header } from "./Header";
import { TodoInput } from "./TodoInput";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { List } from "./List";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;
  width: 800px;
  height: 100%;
  gap: 1rem;
`;

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <Wrapper>
        <Header />
        <TodoInput />
        <div className="flex flex-col gap-2 w-3/4">
          {todos.length ? (
            todos.map((todo) => <List key={todo.id} {...todo} />)
          ) : (
            <h2 className="font-semibold text-center">추가된 할 일이 없습니다</h2>
          )}
        </div>
      </Wrapper>
    </>
  );
};

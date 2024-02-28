import { useState } from "react";
import { Button, Input } from "../../assets/styles/commonStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addTask } from "../../store/todoSlice";

export const TodoInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");

  const onClickHandler = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    } else {
      alert("공백은 추가할 수 없습니다.");
    }
  };

  return (
    <>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={onClickHandler}>Add</Button>
      </div>
    </>
  );
};

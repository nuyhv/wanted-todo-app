import { useDispatch } from "react-redux";
import { Button } from "../../assets/styles/commonStyles";
import { AppDispatch } from "../../store/store";
import { deleteTask } from "../../store/todoSlice";

interface ListProps {
  id: string;
  text: string;
}

export const List: React.FC<ListProps> = ({ id, text }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="flex p-2 border-[1px] rounded-lg justify-between">
        <div className="flex justify-center items-center px-3">{text}</div>
        <Button onClick={() => dispatch(deleteTask(id))}>Delete</Button>
      </div>
    </>
  );
};

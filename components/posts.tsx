import Card from "@components/card";
import { IItem } from "@models/todo";

const TodoList = ({ data }: { data: IItem[] }) => {

    return (
      <>
        <div className="m-2 text-4xl font-bold flex flex-col">
          <div className="m-2 text-2xl text-amber-800 font-bold text-center">
            BLOG
          </div>
        </div>
        <div className="flex flex-wrap flex-row">
          {data
            ? data.map((item) => <Card data={item} key={item.id} />)
            : "Failed fetch data"}
        </div>
      </>
    );
}

export default TodoList;
import Card from "@components/card";
import { IItem } from "@models/todo";

const TodoList = ({ data }: { data: IItem[] }) => {

    return (
      <>
        <div className="m-2 text-4xl font-bold flex flex-col">
          <div className="m-2 text-2xl text-stone-700 font-bold text-center">
            SIMPLE POSTS BLOG
          </div>
        </div>
        <div className="grid grid-cols-3">
          {data
            ? data.map((item) => <Card data={item} key={item.id} />)
            : "Failed fetch data"}
        </div>
      </>
    );
}

export default TodoList;
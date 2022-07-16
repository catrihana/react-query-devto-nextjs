import { IItem } from "@models/todo";

const Card = ({ data }: { data: IItem }) => {
  return (
    <div className="h-auto min-w-[180px] mx-auto">
      <>
        <div className="bg-stone-300 py-10 px-5 m-3 rounded h-80">
          <h1 className="cursor-pointer font-bold text-xl mb-3 text-stone-600 hover:text-stone-700 uppercase">
            {data.title}
          </h1>
          <p className="capitalize mb-3 text-stone-600 text-justify">
            {data.body}
          </p>
        </div>
      </>
    </div>
  );
}

export default Card;
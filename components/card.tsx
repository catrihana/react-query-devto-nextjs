import { IItem } from "@models/todo";

const Card = ({ data }: { data: IItem }) => {
  return (
    <div className="max-[80%] mx-auto">
        <>
          <div className="bg-amber-500 py-10 px-5 m-3 rounded">
            <h1 className="cursor-pointer font-bold text-xl mb-3 text-amber-100 hover:text-amber-700 uppercase">
              {data.title}
            </h1>
            <p className="capitalize mb-3 text-amber-100">{data.body}</p>
          </div>
        </>
    </div>
  );
}

export default Card;
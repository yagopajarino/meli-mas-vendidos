import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="flex justify-center w-full">
      <div className="p-3 w-1/4 h-36 bg-yellow-300 rounded-lg shadow-lg flex justify-center items-center">
        <Spinner />
      </div>
    </div>
  );
}

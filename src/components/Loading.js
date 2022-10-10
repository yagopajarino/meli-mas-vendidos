import Spinner from "./Spinner";

export default function Loading() {
  return (
    <div className="p-3 bg-slate-600 rounded-lg shadow-lg text-slate-200 flex space-x-2 items-center justify-center">
      <h1>Cargando</h1>
      <Spinner />
    </div>
  );
}

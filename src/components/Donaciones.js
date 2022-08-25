import Cafecito from "./Cafecito";

export default function Donaciones() {
  return (
    <div className=" bg-yellow-300 flex items-center justify-around">
      <div className="w-3/4 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl">Donaciones</h2>
          <p>Tus cafecitos ayudan a mantener la app.</p>
        </div>
        <Cafecito />
      </div>
    </div>
  );
}

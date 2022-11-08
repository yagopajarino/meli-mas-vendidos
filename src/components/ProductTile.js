export default function ProductTile({ element, onClick }) {
  function parsedPrice(price) {
    return Math.round(price)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div
      className=" lg:my-3 rounded bg-white tile w-full"
      style={
        window.innerWidth > 1024 ? { width: "284px", height: "400px" } : {}
      }
      onClick={onClick}
      id={element.id}
    >
      <div className="my-3 pb-5 px-3 border-b">
        <img src={element.pictures[0].url} height={"200px"}></img>
      </div>
      <div className=" px-5 py-3 space-y-2">
        <h1 className=" font-medium text-2xl">
          $ {parsedPrice(element.price)}
        </h1>
        <h1 className=" text-base text-gray-500">{element.title}</h1>
      </div>
    </div>
  );
}

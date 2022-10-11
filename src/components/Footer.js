export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-slate-50">
      <div className="w-full flex p-5 items-center justify-center">
        <a href="https://yagopajarino.ar" className="px-2">
          Yago Pajariño
        </a>
        |<p className="px-2">{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

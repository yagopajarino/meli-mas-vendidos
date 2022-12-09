export default function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className="text-lg">
      {children}
    </button>
  );
}

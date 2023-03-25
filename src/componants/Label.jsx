export default function Label({ id, text, value }) {
  return (
    <div id={id}>
      <span>{text}</span>
      <span>{value}</span>
    </div>
  );
}

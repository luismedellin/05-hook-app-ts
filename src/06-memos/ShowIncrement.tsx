interface Props {
  increment: (value: number) => void;
}

export const ShowIncrement = ({ increment }: Props) => {
  console.log("Me volví a generar");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >Incrementar</button>
  );
};

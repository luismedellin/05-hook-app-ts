import { useLayoutEffect, useRef, useState } from "react";

interface Props {
  author: string;
  quote: string;
}

export const Quote = ({ author, quote }: Props) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientReact();

    setBoxSize({height, width})
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {author}
        </p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

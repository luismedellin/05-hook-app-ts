interface Props {
    author: string;
    quote: string;
}

export const Quote = ({author, quote}: Props) => {
  return (
    <blockquote className="blockquote text-end">
        <p className="mb-1">{author}</p>
        <footer className="blockquote-footer">{quote}</footer>
    </blockquote>
  )
}

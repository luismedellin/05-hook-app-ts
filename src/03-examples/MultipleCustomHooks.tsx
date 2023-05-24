import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];


  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{author}</p>
          <footer className="blockquote-footer">{quote}</footer>
        </blockquote>
      )}

      <button 
        className="btn btn-primary" 
        disabled={isLoading}
        onClick={()=> increment()}>
        Next quote
      </button>
    </>
  );
};

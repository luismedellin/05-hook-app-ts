import {memo} from 'react';

interface Props {
    value: number;
}

export const Small = memo(({value}: Props) => {
  console.log('render');
  return (
    <small>{value}</small>
  )
})

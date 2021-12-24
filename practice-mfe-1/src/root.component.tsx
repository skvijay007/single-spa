import React from 'react';
import Base from './components/base';

export default function Root(props) {
  return (
    <section>
      <h1>MFE {props.name} is mounted!</h1>
      <Base />
    </section>
  )
}

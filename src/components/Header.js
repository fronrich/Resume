import React from 'react'

export default function Header(props) {
  return (
    <section className={`Header`}>
      <p className={`DocumentTitle TextTitle`}>
        {props.title}
      </p>
      <p className={`DocumentSubtitle TextSubtitle`}>
        {props.subtitle}
      </p>
    </section>
  )
}

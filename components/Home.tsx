import React from 'react'
import { Description } from './styled/sharedstyles'
import Link from 'next/link'

function Home({ titulo }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <Description>
        <Link href="/">&larr; Go Back</Link>
      </Description>
    </div>
  )
}

export default Home
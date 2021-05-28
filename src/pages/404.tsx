import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/error'
export default function error() {
  return (
    <Container>
      <Head>
        <title>Template | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <h2>Ops... Não Encontramos essa página</h2>
      </div>
    </Container>
  )
}

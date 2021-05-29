import React from 'react'
import Head from 'next/head'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { Wrapper } from '../styles/index'
import { GetStaticProps } from 'next'
import { api } from '../services/api'

interface Repositorios {
  id: number
  name: string
}

type HomeProps = {
  repos: Repositorios[]
}

export default function Home({ repos }: HomeProps) {
  const reposNumber = repos.length
  const currentDate = format(new Date(), 'EEEEEE , d MMMM Y', {
    locale: ptBR
  })

  return (
    <Wrapper>
      <Head>
        <title>Template | Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <div className="content">
          <section>
            <h2>Template Projeto Next-PWA</h2>

            <p>Esse site conta com a tecnologia NextJs,PWA,styled-components</p>
            <p>
              Neste template você encontrarar modelos de
              páginas,componentes,requisições a api e requisições ao servidor do
              Next
            </p>

            <h3>Sobre o Autor:</h3>
            <p>
              Me chamo Levir César, possuo {reposNumber} projetos públicos no
              <a href="https://github.com/levircesar"> Meu Github</a>
            </p>

            <h2 style={{ margin: '10px', textAlign: 'center' }}>
              Apoie esse projeto com qualquer valor
            </h2>

            <form
              style={{ textAlign: 'center' }}
              action="https://www.paypal.com/donate"
              method="post"
              target="_top">
              <input
                type="hidden"
                name="hosted_button_id"
                value="ZQR9J5LBZAMLN"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>

            <p
              style={{
                margin: '50px',
                textAlign: 'end'
              }}>
              Fortaleza/CE -{' '}
              <span style={{ textTransform: 'capitalize' }}>{currentDate}</span>
            </p>
          </section>
        </div>
      </main>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('repos')

  const repos = data.map(repositorios => {
    return {
      id: repositorios.id,
      name: repositorios.name
    }
  })

  //const latestrepos = repos.slice(0, 2);
  //const allrepos = repos.slice(2, repos.length);

  return {
    props: {
      repos
    },
    revalidate: 60 * 60
  }
}

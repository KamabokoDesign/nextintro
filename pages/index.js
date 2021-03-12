import Head from 'next/head'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next Intro</title>
        <link rel="icon" href="/favicon.ico" />

        {/*SEO Optimization*/}
        <meta name="keywords" content="wen development, programming"/>
      </Head>

      <main>
          <section>
            <h1>Test</h1>
          </section>
          <section>
            {articles.map(article => (
              <div key={article.id}>{article.title}</div>
            ))}
          </section>
        </main>
    </div>
  )
}

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

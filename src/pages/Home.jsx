import ListPosts from "./ListPosts"

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <section className="container flex flex--center">
        <article className="card post">
          <ListPosts url={"/posts"}></ListPosts>
        </article>
      </section>
    </main>
  )
}

export default Home

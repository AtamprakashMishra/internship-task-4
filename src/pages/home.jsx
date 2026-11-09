
import Weather from '../components/Weather.jsx'

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 text-center">

        <span className="mb-5 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          Welcome to My Website
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
          Build Your Future With
          <span className="block text-blue-400">
            Modern Web Technology
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          Explore modern web development with React, Tailwind CSS and
          responsive design. Learn, create and build something amazing.
        </p>

        <a href="/internship-task-4/about"
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg transition hover:bg-blue-500"
        >
          Get Started →
        </a>

      </section>

      <section className="mx-auto max-w-2xl px-5 pb-16">
        <Weather />
      </section>

    </div>
  )
}

export default Home
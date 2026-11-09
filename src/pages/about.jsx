 
function About() {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Our Project
          </span>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Who We Are
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            We create modern and responsive web experiences using the latest
            frontend technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-400">
              Our Mission
            </h2>
            <p className="leading-7 text-slate-300">
              Our mission is to build user-friendly websites that provide
              simple, attractive and useful digital experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-400">
              Our Technology
            </h2>
            <p className="leading-7 text-slate-300">
              This project uses React, Tailwind CSS, JavaScript and React
              Router to create a responsive frontend application.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About
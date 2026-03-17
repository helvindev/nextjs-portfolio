export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 text-center transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Interested in working together? Reach out via email, LinkedIn, or GitHub.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <a
          href="https://www.linkedin.com/in/helvin-laveda"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 dark:text-blue-300 dark:border-blue-300 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.5h4.6V24H.2V8.5zM8.56 8.5h4.4v2.11h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.48 3.04 5.48 6.99V24h-4.6v-7.77c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.98 2.02-2.98 4.11V24h-4.6V8.5z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="mailto:helvinlaveda11@gmail.com"
          className="flex items-center gap-2 px-4 py-2 border border-red-500 text-red-700 dark:text-red-300 dark:border-red-300 rounded-xl hover:bg-red-50 dark:hover:bg-red-900 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.8-8 5.2-8-5.2V6l8 5.2L20 6v2.8z" />
          </svg>
          Gmail
        </a>

        <a
          href="https://github.com/helvindev"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-slate-500 text-slate-700 dark:text-slate-200 dark:border-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-.32.07-.77.12-1.04.12-2.05 0-2.48-1.56-2.48-1.56-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.76 1.28 3.44.98.11-.76.41-1.28.75-1.57-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.19.93-.26 1.9-.39 2.88-.39.98 0 1.95.13 2.88.39 2.2-1.5 3.18-1.19 3.18-1.19.63 1.64.23 2.86.11 3.16.75.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18 0 1.58-.02 2.85-.02 3.24 0 .31.21.67.8.56C20.71 21.42 24 17.09 24 12c0-6.35-5.15-11.5-11.5-11.5z" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  )
}
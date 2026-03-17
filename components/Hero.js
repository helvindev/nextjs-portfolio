import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 transition-colors duration-500">
      <div className="mb-6 relative rounded-full overflow-hidden w-52 h-52 border-4 border-white shadow-xl bg-slate-100 dark:bg-slate-700">
        <Image
          src="/logo-rounded.png"
          alt="Helvin face"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <h1 className="text-5xl font-extrabold mb-6">
        Hi, I'm <span className="text-slate-700 dark:text-slate-200">Helvin</span>
      </h1>
      <p className="max-w-xl text-slate-600 dark:text-slate-300 mb-12">
        Fullstack Engineer with 4 years of experience specializing in Node.js, Laravel, Golang, Next.js, and database technologies. Passionate about building scalable applications and optimizing performance.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="bg-slate-800 dark:bg-slate-200 dark:text-slate-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
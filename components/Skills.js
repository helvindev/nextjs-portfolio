import Image from 'next/image'

const skills = [
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Golang", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" }
]

// Duplicate skills for infinite scroll effect
const duplicatedSkills = [...skills, ...skills]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-10 transition-colors duration-500">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

      <div className="relative overflow-hidden max-w-6xl mx-auto">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 dark:from-gray-900"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 dark:from-gray-900"></div>

        <div className="animate-marquee flex items-center gap-4">
          {duplicatedSkills.map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex-shrink-0 w-48 bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-lg flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
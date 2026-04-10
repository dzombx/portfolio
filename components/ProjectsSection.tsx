import Image from "next/image"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Megaphone, Layers3, Camera } from "lucide-react"

const projects = [
  {
    title: "CNVS.",
    description: "A magazine showcasing CNVS. as a clothing brand.",
    image: "/01.png",
    link: "https://canva.link/6kr7i6mz1rufv80",
    icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Launch for CNVS.",
    description: "A billboard design showcasing the opening collection for CNVS.",
    image: "/02.png",
    link: "https://canva.link/r150vgukwk9m0dk",
    icon: <Megaphone className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Materiality for CNVS.",
    description: "A poster showcasing the material used for CNVS.",
    image: "/05.png",
    link: "https://canva.link/lf5oz4x7kuu4kto",
    icon: <Layers3 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Presence",
    description: "An instagram post used tease the drop for CNVS.",
    image: "/04.png",
    link: "https://canva.link/8tbmal7toqkarxr",
    icon: <Camera className="h-4 w-4 text-neutral-500" />,
  },
]

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-24 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A few recent designs and visuals I’ve created.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <BentoGrid className="max-w-6xl mx-auto gap-6 md:auto-rows-[20rem]">
          {projects.map((project, i) => (
            <BentoGridItem
              key={project.title}
              className={`${i === 2 ? "md:col-span-2" : ""} relative hover:z-10`}
              icon={project.icon}
              title={project.title}
              header={
                <div className="relative w-full h-full min-h-[10rem] overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/bento:scale-[1.03]"
                    sizes={i === 2 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-3 right-3 z-10"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-background/80 backdrop-blur-sm"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              }
              description={project.description}
            />
          ))}
        </BentoGrid>
      </div>
    </motion.section>
  )
}


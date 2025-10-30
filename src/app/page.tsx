import { HackathonCard } from "@/components/hackathon-card";
import { AchievementCard } from "@/components/achievement-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card-modal";
import { ResumeCard } from "@/components/resume-card";
import { SkillsSection } from "@/components/skills-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground relative inline-block">
              About
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-300 dark:to-yellow-500 rounded-full"></span>
            </h2>
            <p className="text-sm text-muted-foreground">Get to know more about me</p>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert mt-4">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-2 mb-4">
              <h2 className="text-2xl font-bold text-foreground relative inline-block">
                Work Experience
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 dark:from-green-300 dark:to-green-500 rounded-full"></span>
              </h2>
              <p className="text-sm text-muted-foreground">My professional journey</p>
            </div>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="space-y-2 mb-4">
              <h2 className="text-2xl font-bold text-foreground relative inline-block">
                Education
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 rounded-full"></span>
              </h2>
              <p className="text-sm text-muted-foreground">My academic background</p>
            </div>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground relative inline-block">
                Projects
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-300 dark:to-orange-500 rounded-full"></span>
              </h2>
              <p className="text-sm text-muted-foreground">Solo & collaborative work</p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  projectType={project.projectType}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  images={project.images}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground relative inline-block">
                Achievements
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 dark:from-pink-300 dark:to-pink-500 rounded-full"></span>
              </h2>
              <p className="text-sm text-muted-foreground">Recognition & accomplishments</p>
            </div>
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.hackathons.map((achievement, id) => (
              <BlurFade
                key={achievement.title + achievement.dates}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <AchievementCard
                  title={achievement.title}
                  description={achievement.description}
                  location={achievement.location}
                  dates={achievement.dates}
                  links={achievement.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground relative inline-block">
                Contact
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 dark:from-cyan-300 dark:to-cyan-500 rounded-full"></span>
              </h2>
              <p className="text-sm text-muted-foreground">Let&apos;s get in touch</p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I&apos;m always open to discussing new opportunities, collaborations, or projects. Feel free to reach out to me via{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline font-medium"
                  target="_blank"
                >
                  LinkedIn
                </Link>{" "}
                or send me an email at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 hover:underline font-medium"
                >
                  {DATA.contact.email}
                </Link>
                . I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

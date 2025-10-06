import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Learned by coding all night and debugging all day!
        </PageHeaderHeading>
        <PageHeaderDescription>
        I’m a full-stack and backend engineer who enjoys building intelligent, 
        production-ready systems. Day-to-day I work with <strong>TypeScript</strong>, 
        <strong>Next.js</strong>, and <strong>React</strong> on the frontend, and 
        <strong>Node.js</strong>/<strong>Go</strong> on the backend—shipping clean APIs, 
        reliable services, and data-driven features.
      </PageHeaderDescription>

      <PageHeaderDescription>
        My current focus is <strong>AI-powered apps</strong>: wiring up 
        <strong>OpenAI</strong> tools, <strong>RAG pipelines</strong>, and 
        <strong>LLM agents</strong> with solid infrastructure—<strong>Docker</strong>, 
        <strong>Kubernetes</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>. 
        I’m actively learning <strong>PyTorch</strong> (tensors, autograd, training loops) 
        through hands-on projects to deepen my understanding from model basics to practical deployment.
      </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;

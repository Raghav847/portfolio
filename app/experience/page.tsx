import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { experiences } from '@/constants/experience';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Your portfolio proves your worth, but your work makes it shine!        </PageHeaderHeading>
        <PageHeaderDescription>
        My journey as a developer has been a blend of structured learning, late-night debugging, 
  and building things that actually work. From designing scalable backends in <strong>Go</strong> and <strong>Node.js</strong> 
   to crafting responsive frontends with <strong>Next.js</strong> and <strong>React</strong>, 
  I’ve learned to balance creativity with precision. Working across <strong>AI-powered apps</strong>, 
  cloud systems, and data pipelines has taught me that elegant code is as much about clarity as performance.  
  Each role and project has strengthened my ability to collaborate, iterate fast, and turn complex ideas 
  into practical, user-centric software — all while keeping the servers (mostly) running past midnight.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={experiences} />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;

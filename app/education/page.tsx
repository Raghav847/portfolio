import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
        Classrooms taught the basics, but coding crafts the mastery!
        </PageHeaderHeading>
        <PageHeaderDescription>
  My educational journey has been a blend of curiosity, experimentation, and
  a drive to solve real-world problems through technology. Pursuing my
  Master’s in Computer Science at Washington State University has allowed me
  to deepen my understanding of artificial intelligence, machine learning,
  and large-scale software systems while gaining hands-on experience in
  building production-ready solutions.
</PageHeaderDescription>

<PageHeaderDescription>
  During my Bachelor’s in Information Technology at Sikkim Manipal Institute
  of Technology, I developed a strong foundation in programming, algorithms,
  and cloud computing. This phase of my journey shaped my passion for
  software engineering, leading me to explore AI-driven applications and
  scalable backend systems.
</PageHeaderDescription>

<PageHeaderDescription>
  Combining academic rigor with practical application, I continue to expand
  my skill set through research, projects, and collaborative work — bridging
  the gap between theory and innovation to create impactful, data-driven
  solutions.
</PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};
export default EducationPage;

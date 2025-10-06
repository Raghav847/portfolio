import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Me</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          More than just a title—let’s dive deeper!
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’m a <strong>Full-Stack & Backend Engineer</strong> and M.S. CS student at
          <strong> Washington State University</strong>, focused on turning ideas into
          <strong> production-ready, data-driven applications</strong>. I love designing clean
          APIs, efficient data models, and resilient services that power modern web
          experiences.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the backend, I work with <strong>TypeScript/Node</strong> and <strong>Go</strong>, shipping
          services with <strong>PostgreSQL</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, and message queues.
          I containerize with <strong>Docker</strong>, orchestrate on <strong>Kubernetes</strong>, and care deeply
          about performance, observability, and clean architecture.
        </PageHeaderDescription>

        <PageHeaderDescription>
          On the AI side, I build <strong>LLM-powered features</strong>—from <strong>RAG pipelines</strong> and
          <strong> AI agents</strong> to evaluation loops and prompt tooling—using <strong>Python</strong>, <strong>PyTorch</strong>,
          and modern vector search. I enjoy stitching ML with product: data ingestion,
          embeddings, retrieval, ranking, and feedback signals that actually move metrics.
        </PageHeaderDescription>

        <PageHeaderDescription>
          <strong>Currently learning:</strong> leveling up in <strong>PyTorch</strong> (tensors, autograd,
          data loaders, fine-tuning), <strong>vision/transformer basics</strong>, <strong>RAG best practices</strong>,
          <strong> vector databases</strong>, and practical <strong>MLOps</strong> (experiments, evals, deployment).
          On the web side, I’m sharpening <strong>Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong> for
          fast, accessible UIs paired with robust APIs.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I thrive in collaborative environments and love owning features end-to-end:
          scoping, building, measuring, and iterating. My goal is simple—<strong>ship
          reliable software that feels smart</strong> and makes users measurably happier.
        </PageHeaderDescription>
      </PageHeader>
      

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;

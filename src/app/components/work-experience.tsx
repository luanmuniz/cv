import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      id="work-experience-badges"
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-sm tabular-nums text-gray-500 print:text-[10px]"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  if(!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="hover:underline print:ml-1"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
  isLast: boolean;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work, isLast }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description, highlights } =
    work;

  return (
    <Card className="border-none py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none print:text-sm print:gap-x-0">
            {title}<span className="text-sm font-semibold leading-none print:text-[12px] hidden print:inline-flex">
          , at <CompanyLink company={company} link={link} />
        </span>
          </h3>
          <WorkPeriod start={start} end={end} />
        </div>

        <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px] print:hidden">
          <CompanyLink company={company} link={link} />
        </h4>
      </CardHeader>

      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          <p className="mb-2">{description}</p>
          {highlights && highlights.length > 0 && (
            <ul className="list-inside list-disc">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={`my-3 print:my-2 ${isLast && 'mb-0 print:mb-0'}`}>
          <BadgeList
            className="flex-wrap gap-1 print:mt-0 print:gap-0.5 print:-mx-1"
            badges={badges}
          />
        </div>
        {!isLast && <hr className="border-dashed size-[30%] print:mb-2 hidden print:flex" />}
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="work-experience">
        Experience
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item, index) => (
          <article key={`${item.company}-${item.start}`}>
            <WorkExperienceItem work={item} isLast={((index + 1) === work.length)} />
          </article>
        ))}
      </div>
    </Section>
  );
}

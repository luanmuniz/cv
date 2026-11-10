import { Section } from "../../components/ui/section";
import { Highlights } from "./highlights";

interface AboutProps {
  summary: string;
  className?: string;
  highlights: string[];
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className, highlights }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        Summary
      </h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[11px]">
        <span dangerouslySetInnerHTML={{ __html: `<p class="mb-2">${summary.replace(/\n/g, `</p><p class="mb-2">`)} Some of my career highlights are:</p>`.replace('<p class="mb-2"></p>', '') }} />
        <Highlights highlights={highlights} type="inline" />
      </div>
    </Section>
  );
}

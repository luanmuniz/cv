import { Section } from "../../components/ui/section";

interface HighlightsProps {
  highlights: string[];
  className?: string;
}

/**
 * Highlights section component
 * Displays key career highlights
 */
export function Highlights({ highlights, className }: HighlightsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">Career Highlights</h2>
      <ul className="list-inside list-disc text-pretty font-mono text-sm text-foreground/80 print:text-[11px]" aria-label="List of career highlights">
        {highlights.map((highlight, index) => (
          <li key={index} className="mt-1" dangerouslySetInnerHTML={{ __html: highlight }} />
        ))}
      </ul>
    </Section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Ready to build with us?",
  subtitle = "Book a discovery call and let’s architect your next product.",
  buttonText = "Book a Free Consultation",
  buttonLink = "/contact"
}: CTASectionProps) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]">
      {title && <h3 className="text-2xl font-semibold text-white">{title}</h3>}
      {subtitle && <p className="mt-2 text-gray-300">{subtitle}</p>}
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button asChild size="lg">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}

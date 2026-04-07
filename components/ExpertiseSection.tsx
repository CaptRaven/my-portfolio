import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="w-full bg-zinc-950/40 py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technical Expertise"
          subtitle="Capability-focused expertise with applied examples, so the work is easy to map to product and hiring needs."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {profile.expertise.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-white/10 bg-black/30 p-8"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{group.description}</p>
              <div className="mt-6 space-y-3">
                {group.examples.map((example) => (
                  <p
                    key={example}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200"
                  >
                    {example}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

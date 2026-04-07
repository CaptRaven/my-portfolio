import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function AboutEdgeSection() {
  return (
    <section id="about" className="w-full py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About / Edge"
          subtitle="A concise view of how I think, what I build well, and where I create the most value."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h3 className="text-lg font-semibold text-white">Who I Am</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{profile.about}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h3 className="text-lg font-semibold text-white">What Makes Me Different</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{profile.edge}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h3 className="text-lg font-semibold text-white">Problems I Like Solving</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{profile.problems}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

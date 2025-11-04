import Link from "next/link";

type SearchLink = {
  label: string;
  href: string;
  description?: string;
};

const jstorSearches: SearchLink[] = [
  {
    label: "Pamela + sentimentalism",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Samuel+Richardson+Pamela+sentimentalism&acc=off&wc=on&fc=off",
    description:
      "Critical discussions of sensibility, feeling, and moral psychology in Pamela",
  },
  {
    label: "Pamela + virtue + gender",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Pamela+%22virtue+rewarded%22+gender&acc=off&wc=on&fc=off",
    description:
      "Gendered virtue, chastity, consent, and the politics of female conduct",
  },
  {
    label: "Pamela + class + social mobility",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Pamela+class+%22social+mobility%22&acc=off&wc=on&fc=off",
    description:
      "Servant?master relations, hierarchy, property, and reward structures",
  },
  {
    label: "Pamela + epistolary + moral sentiment",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Pamela+epistolary+%22moral+sentiment%22&acc=off&wc=on&fc=off",
    description:
      "Form, immediacy, surveillance, and the ethics of first-person narration",
  },
  {
    label: "Pamela + sensibility + tears",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Pamela+sensibility+tears&acc=off&wc=on&fc=off",
    description:
      "Affect display, weeping, and the rhetoric of feeling in the novel",
  },
  {
    label: "Pamela + Shamela + satire",
    href:
      "https://www.jstor.org/action/doBasicSearch?Query=Pamela+Shamela+satire&acc=off&wc=on&fc=off",
    description:
      "Contemporary critiques that test the limits of virtue and sentiment",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <main className="mx-auto max-w-3xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Sentimentalism and Virtue in Samuel Richardson?s ?Pamela?
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Research focus: the birth of the novel as a moral and emotional art
            form reflecting social class and gender.
          </p>
        </header>

        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <h2>Thesis</h2>
          <p>
            ?Pamela; or, Virtue Rewarded? pioneers the English novel by merging
            epistolary immediacy with a culture of sensibility in which feeling
            both authorizes moral judgment and disciplines readers. Richardson?s
            rhetoric of virtue is inseparable from questions of gender and class:
            a servant?s chastity becomes a test case for the redistribution of
            status through affective credibility, while the novel instructs its
            audience in the habits of self-surveillance, sympathy, and
            improvement that define modern bourgeois subjectivity.
          </p>

          <h2>Key Arguments</h2>
          <ul>
            <li>
              <strong>Epistolary form as moral technology.</strong> Letters
              produce an ethics of inwardness (sincerity, conscience) and
              immediacy (present-tense evaluation), staging the reader as a
              witness whose sympathy ratifies virtue.
            </li>
            <li>
              <strong>Sentiment as social currency.</strong> Displays of feeling
              (tears, shame, gratitude) become legible proofs of character that
              enable cross-class recognition and the novel?s promise of reward.
            </li>
            <li>
              <strong>Gendered pedagogy of virtue.</strong> Pamela?s ?virtue? is
              sexual and ethical, conflating chastity with consent and consent
              with moral agency; the narrative teaches readers how to read female
              affect while exposing its coercive conditions.
            </li>
            <li>
              <strong>Domestic power and property.</strong> Courtship scenes
              double as negotiations over labor, land, and lineage; the marriage
              plot integrates affect into the legal-economic order.
            </li>
            <li>
              <strong>Contestation and critique.</strong> Contemporary satires
              (e.g., ?Shamela?) reveal how sentimental cues can be imitated,
              raising doubts about authenticity and the market for virtue.
            </li>
          </ul>

          <h2>How to Use the References</h2>
          <p>
            The links below open curated searches on JSTOR. Use your
            institutional access to retrieve full texts and export citations.
            Combine two or more queries to narrow results by theme.
          </p>

          <div className="not-prose mt-6 grid gap-3">
            {jstorSearches.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block rounded-lg border border-zinc-200 p-4 transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                <div className="font-medium">{s.label}</div>
                {s.description ? (
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {s.description}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>

          <h2 className="mt-10">Suggested Citation Frames</h2>
          <p className="text-sm">
            When you select articles from JSTOR, cite using your required style.
            Samples:
          </p>
          <ul>
            <li>
              <strong>MLA</strong>: Author Lastname, Firstname. ?Article Title.?
              <em>Journal Title</em> volume.issue (Year): pages. JSTOR.
            </li>
            <li>
              <strong>Chicago</strong>: Lastname, Firstname. ?Article Title.?
              <em>Journal Title</em> Volume, no. Issue (Year): pages. Accessed
              Month Day, Year. JSTOR.
            </li>
          </ul>

          <h2 className="mt-10">Writing Checklist</h2>
          <ul>
            <li>Define sentimentalism and its eighteenth-century contexts.</li>
            <li>Analyze scenes of tears, petitions, and self-scrutiny.</li>
            <li>Explain how epistolary immediacy shapes moral judgment.</li>
            <li>Connect virtue to class mobility and domestic economy.</li>
            <li>Engage counter-arguments (e.g., satiric critiques like ?Shamela?).</li>
          </ul>
        </section>

        <footer className="mt-12 text-sm text-zinc-500">
          Built for deployment to Vercel.
        </footer>
      </main>
    </div>
  );
}

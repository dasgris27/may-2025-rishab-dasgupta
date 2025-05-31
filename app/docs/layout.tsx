import Link from "next/link";

import { title } from "@/components/primitives";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Docs</h1>
        <div className="flex gap-6 mt-16">
          <div className="flex flex-col border-r pr-2">
            <Link className="text-primary" href={"/docs/example"}>
              Example
            </Link>
            <Link className="text-primary" href={"/docs/other"}>
              Other
            </Link>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

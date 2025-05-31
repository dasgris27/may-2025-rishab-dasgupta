import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { CircleAlert } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <p>Start building! this is an example / template site to start with.</p>
      <p>
        Take a look at the <Code>README.md</Code> file for some info.
      </p>
      <div>
        <h3 className="text-danger flex gap-1">
          <CircleAlert /> WARNING
        </h3>
        <p>
          Do <strong>not</strong> delete or modify the following files unless
          you know exactly what you&apos;re doing!
        </p>
        <ul className="list-disc ml-6">
          <li>
            <Code>/app/providers.tsx</Code>
          </li>
          <li>
            <Code>/app/layout.tsx</Code> (can modify this one)
          </li>
          <li>
            <Code>/app/error.tsx</Code>
          </li>
          <li>
            <Code>/components/primitives.ts</Code> (can modify)
          </li>
          <li>
            <Code>/config/font.ts</Code> (can modify)
          </li>
          <li>
            <Code>/config/site.ts</Code> (can modify)
          </li>
          <li>
            <Code>/node_modules/*</Code>
          </li>
          <li>
            <Code>/styles/globals.css</Code> (can modify)
          </li>
          <li>
            <Code>/types/index.ts</Code> (can modify but likely won&apos;t need
            to)
          </li>
          <li>
            <Code>/.eslintignore</Code>
          </li>
          <li>
            <Code>/.eslintrc.json</Code>
          </li>
          <li>
            <Code>/.npmrc</Code>
          </li>
          <li>
            <Code>/next-env.d.ts</Code>
          </li>
          <li>
            <Code>/package-lock.json</Code>
          </li>
          <li>
            <Code>/package.json</Code>
          </li>
          <li>
            <Code>/tsconfig.json</Code>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}

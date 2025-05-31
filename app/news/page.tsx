import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { Cog } from "lucide-react";

import { title, subtitle } from "@/components/primitives";
// import {Cog} from "@heroui/button";

export default function NewsPage() {
  return (
    <div>
      <h1 className={title()}>News</h1>
      <p className="mb-6">
        Welcome to the news page. Here you can find the latest and greatest
        about the innovations we are currently making!
      </p>
      <h2 className={subtitle()}>Fun Facts</h2>
      <p className="mb-6">
        In case you didn&apos;t know, we were actually the ones who implemented
        the fun fact generators that have gone viral recently! If you would like
        to check out our work, simply take a look{" "}
        <Link href="https://F01errorfunfacts.com/">here</Link>! We are also
        planning to expand on it soon, potentially creating an API based on this
        functionality that is free for any other developer to use!
      </p>
      <Textarea
        className="mb-2"
        label="Comment"
        maxRows={5}
        minRows={1}
        placeholder="Add a comment..."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <Card>
          <CardHeader className="flex gap-2 font-bold">
            <Avatar size="sm" src="/canny__googlers96.png" />
            @canny__googlers96
            <span className="font-normal text-small text-neutral-700 dark:text-neutral-300">
              1 day ago
            </span>
          </CardHeader>
          <CardBody className="pt-0">Omg thats so cool</CardBody>
        </Card>
        <Card>
          <CardHeader className="flex gap-2 font-bold">
            <Avatar size="sm" src="/JestLockinEvryDei.jpg" />
            @JestLockinEvryDei
            <span className="font-normal text-small text-neutral-700 dark:text-neutral-300">
              3 days ago
            </span>
          </CardHeader>
          <CardBody className="pt-0">
            BRUHh I LITRELLY HAVE TESTS EVRY DAY BRO I CANT EVN BREATH{" "}
          </CardBody>
        </Card>
      </div>
      <br />
      <br />
      <div className="h-full w-full flex flex-wrap justify-around p-4">
        <p className="border-2 border-oklch(0.882 0.059 254.128) p-4 m-4">
          this is a flexbox!
        </p>
        <p className="border-2 border-gray p-4 m-4">
          it seperates information in a manner that can make it easier to read.
        </p>
        <p className="border-2 border-gray p-4 m-4">
          you can customize it by selecting color, border size, etc.
        </p>
      </div>
      <br />
      <p>this button will take you to a picture!</p>
      <Button as={Link} className="bg-blue-300" href="hello world.jpg">
        <Cog />
      </Button>
    </div>
  );
}

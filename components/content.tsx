import type { Dictionary } from "@/lib/dictionary";
import Header from "./header";
import Main from "./main";

type ContentProps = Dictionary;

export default async function Content(props: ContentProps) {
  return (
    <div className="flex flex-col w-full">
      <Header {...props} />
      <Main {...props} />
    </div>
  );
}

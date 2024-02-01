import Content from "@/components/content";
import Paper from "@/components/paper";
import type { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import LocaleSwitcher from "./components/locale-switcher";

type Params = {
  locale: Locale;
};

export default async function Home({ params }: { params: Params }) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="flex flex-col h-screen w-screen">
      <LocaleSwitcher />
      <Paper>
        <Content {...dict} />
      </Paper>
    </div>
  );
}

"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

import styles from "@/styles/locale-switcher.module.css";
import type { Locale } from "@/i18n.config";
import { locales } from "@/i18n.config";

type Params = {
  locale: Locale;
};

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const params = useParams<Params>();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const currentLocale = params.locale;

  const listItems = locales.map<React.ReactElement>((locale) => {
    if (locale === currentLocale) {
      return (
        <li key={locale}>
          <strong>{locale}</strong>
        </li>
      );
    } else {
      return (
        <li key={locale}>
          <u>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </u>
        </li>
      );
    }
  }, []);

  return (
    <div className={`${styles.switcher} space-x-2`}>
      <p>Select locale:</p>
      <ul className="flex space-x-2">{listItems}</ul>
    </div>
  );
}

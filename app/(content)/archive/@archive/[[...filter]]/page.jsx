import { Suspense } from "react";
import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from "@/lib/news";

import NewsList from "@/components/news-list";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  const availableMonths = year ? await getAvailableNewsMonths(year) : [];
  const normalizedMonth = month ? month.padStart(2, "0") : null;
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(normalizedMonth))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = availableMonths;
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}>
      </Suspense> */}
      <Suspense fallback={<p>Loading news...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}

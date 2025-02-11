"use client";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { Kufam } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const Breadcrumb = ({ breadcrumb, path, languageId }) => {
  const [finalBreadcrumb, setFinalBreadcrumb] = useState([]);

  useEffect(() => {
    if (!breadcrumb || !path) return;

    const paths = path.split("/").slice(0, -1);
    const pages = breadcrumb.slice(1).map((page, key) => {
      let href = languageId !== process.env.NEXT_PUBLIC_LANGUAGE_DEFAULT ? "/en/" : "/";
      href += paths.slice(0, key + 1).join("/") + "/";

      return {
        name: page,
        href: href,
        id: paths[key] || null,
      };
    });

    setFinalBreadcrumb(pages);
  }, [breadcrumb, path, languageId]);

  return (
    finalBreadcrumb &&
    finalBreadcrumb.length > 0 && (
      <nav className="px-6 flex pt-6 pb-8 lg:pt-4 lg:pb-12" aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex items-center justify-center space-x-2 w-full overflow-x-auto overflow-y-hidden self-stretch"
        >
          {finalBreadcrumb.map((page, index) => (
            <li key={page.name}>
              <div className="flex items-center gap-x-2">
                {(page.id && index > 1) ? (
                  <Link
                    href={page.href}
                    className="whitespace-nowrap body-extra-small text-link"
                    aria-current={page.id ? "page" : undefined}
                    title={page.name}
                  >
                    {page.name}
                  </Link>
                ) : (
                  <div
                    className={
                      "whitespace-nowrap body-extra-small hidden"
                    }
                  >
                    {page.name}
                  </div>
                )}

                {index === finalBreadcrumb.length - 1 ? null : (
                  <div className={index <= 1 ? 'hidden' : ''}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                    >
                      <path
                        d="M0.605988 16.7402L8.60599 0.740234L9.49999 1.18823L1.49999 17.1882L0.605988 16.7402Z"
                        fill="#D1D5DB"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    )
  );
};

export default Breadcrumb;

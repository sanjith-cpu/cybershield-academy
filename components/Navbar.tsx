"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "../utils/supabase/client";

const navLinks = [
  {
    label: "Home",
    href: "/",
    activePrefixes: ["/"],
  },
  {
    label: "Learn",
    href: "/lessons",
    activePrefixes: ["/lessons", "/kids", "/junior", "/high-school"],
  },
  {
    label: "Activities",
    href: "/activities",
    activePrefixes: [
      "/activities",
      "/quiz",
      "/spot-the-scam",
      "/password-lab",
      "/safe-browsing",
      "/digital-footprint",
      "/cyber-ethics",
      "/scenario-room",
      "/practice-lab",
    ],
  },
  {
    label: "Cyber Safety Starter",
    href: "/cyber-safety-starter",
    activePrefixes: ["/cyber-safety-starter"],
  },
  {
    label: "Resources",
    href: "/resources",
    activePrefixes: [
      "/resources",
      "/careers",
      "/certification-guide",
      "/certificates",
    ],
  },
  {
    label: "About",
    href: "/about",
    activePrefixes: ["/about"],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const supabase = createClient();

    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsLoggedIn(Boolean(user));
    }

    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session?.user));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  function isActiveLink(link: (typeof navLinks)[number]) {
    if (link.href === "/") {
      return pathname === "/";
    }

    return link.activePrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
  }

  const accountHref = isLoggedIn ? "/dashboard" : "/login";
  const accountLabel = isLoggedIn ? "My Progress" : "Log In";

  const accountActive =
    pathname === "/dashboard" ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/forgot-password");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-cyan-300 transition hover:text-cyan-200"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/cybershield-logo.png"
            alt="CyberShield Academy logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />

          <span>CyberShield Academy</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = isActiveLink(link);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-300 hover:bg-slate-900 hover:text-cyan-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {isLoggedIn !== null && (
            <Link
              href={accountHref}
              aria-current={accountActive ? "page" : undefined}
              className={`ml-2 rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                accountActive
                  ? "border-cyan-400 bg-cyan-400 text-slate-950"
                  : "border-cyan-400/50 text-cyan-300 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200"
              }`}
            >
              {accountLabel}
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-800 bg-slate-950 px-6 pb-5 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2 pt-4 sm:grid-cols-2">
            {navLinks.map((link) => {
              const active = isActiveLink(link);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-cyan-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {isLoggedIn !== null && (
              <Link
                href={accountHref}
                onClick={() => setMenuOpen(false)}
                aria-current={accountActive ? "page" : undefined}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  accountActive
                    ? "border-cyan-400 bg-cyan-400 text-slate-950"
                    : "border-cyan-400/40 bg-cyan-400/5 text-cyan-300 hover:border-cyan-300 hover:bg-cyan-400/10"
                }`}
              >
                {accountLabel}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
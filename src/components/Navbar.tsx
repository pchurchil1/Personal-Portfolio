"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-white/85 shadow-[0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900 focus:shadow-soft"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <a href="#" className="group inline-flex items-center gap-3 text-sm font-bold tracking-normal text-ink-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-xs font-bold text-white transition group-hover:-translate-y-0.5">
            PC
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-md border border-ink-200/80 bg-white/70 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-100 hover:text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-ink-900 focus:ring-offset-2 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-ink-200 bg-white/95 px-6 py-4 shadow-soft md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-ink-700 transition hover:bg-ink-50 hover:pl-4 hover:text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

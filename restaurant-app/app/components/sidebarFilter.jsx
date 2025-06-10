'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { label: 'Dashboard', href: '/' },
  { label: 'Projects',  href: '/projects' },
  { label: 'Team',      href: '/team' },
  { label: 'Settings',  href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0
      md:w-64 p-6 space-y-8 bg-white"
    >
      <h2 className="text-2xl font-bold">My App</h2>

      <nav className="flex flex-col space-y-2">
        {nav.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <button
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg transition-colors
                ${active ? 'bg-gray-100 font-medium' : 'hover:bg-gray-300'}`}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

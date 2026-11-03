'use client';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-rose-200/70 dark:border-rose-900/60 bg-rose-50/80 dark:bg-[#2b1d2f]/85 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-rose-300 to-pink-400 p-2 rounded-lg text-white shadow-md shadow-rose-200/70">
            <i className="fas fa-robot text-xl"></i>
          </div>
          <div>
            <h1 className="font-display font-semibold text-xl leading-none text-rose-900 dark:text-rose-100">
              Princess AI Asisten
            </h1>
            <p className="text-xs text-rose-600 dark:text-rose-300">
              Customer Care Chat
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-md border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors text-rose-800 dark:text-rose-200 flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-md border border-rose-200 dark:border-rose-900/50 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors text-rose-800 dark:text-rose-200 flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-emerald-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

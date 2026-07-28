export function AppHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <span className="text-lg font-semibold text-gray-950">
        Digital Frequency
      </span>

      <div
        aria-label="Avatar do usuário"
        className="size-9 rounded-full bg-gray-200"
        role="img"
      />
    </header>
  );
}

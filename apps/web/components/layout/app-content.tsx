import type { PropsWithChildren } from "react";

export function AppContent({ children }: PropsWithChildren) {
  return (
    <main className="w-full flex-1 overflow-y-auto bg-gray-100 p-6">
      {children}
    </main>
  );
}

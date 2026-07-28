import type { PropsWithChildren } from "react";

import { AppContent } from "./app-content";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <AppHeader />

      <div className="flex min-h-0 flex-1">
        <AppSidebar />
        <AppContent>{children}</AppContent>
      </div>
    </div>
  );
}

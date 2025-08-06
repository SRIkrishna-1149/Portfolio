import { ReactNode } from "react";
import Navigation from "./Navigation";
import DisableContextMenu from "./DisableContextMenu";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <DisableContextMenu />
      <Navigation />
      <main className="relative">
        {children}
      </main>
    </div>
  );
};


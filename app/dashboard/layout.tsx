import type React from "react"
import DashboardSidebar from "./components/DashboardSidebar"
import { Header } from "./components/Header"
import { ScrollArea } from "@/app/components/ui/scroll-area"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <ScrollArea className="flex-1">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </ScrollArea>
    </div>
  )
}


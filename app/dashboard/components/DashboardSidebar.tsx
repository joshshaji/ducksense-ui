"use client"
import type React from "react"
import { useState } from "react"
import { BarChart, ChevronDown, FileText, FolderOpen, Home, LayersIcon, Settings, Zap } from "lucide-react"
import Link from "next/link"
import DuckSenseIcon from '../../assets/SVG/icon.svg'
import { usePathname } from "next/navigation"
import { Button } from "@/app/components/ui/button"

type SidebarItem = {
  title: string
  href: string
  icon: React.ElementType
  children?: { title: string; href: string }[]
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Documents",
    href: "/dashboard/documents",
    icon: FileText,
    children: [
      {
        title: "Overview",
        href: "/dashboard/documents",
      },
      {
        title: "Classify",
        href: "/dashboard/documents/classify",
      },
      {
        title: "Ask Questions",
        href: "/dashboard/documents/analyze",
      },
    ],
  },
  {
    title: "Schemas",
    href: "/dashboard/schemas",
    icon: LayersIcon,
  },
  {
    title: "Classification",
    href: "/dashboard/classification",
    icon: FolderOpen,
  },
  {
    title: "Duck Q&A",
    href: "/dashboard/analysis",
    icon: Zap,
  },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>([])

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev.filter((item) => item !== title), title],
    )
  }

  return (
    <div className="flex h-full w-64 flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
      <Link href="/" className="flex items-center space-x-2">
            <DuckSenseIcon className="w-10 h-10" />
            <span className="text-xl font-bold text-blue-600">DuckSense</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <div key={item.title}>
              <Button
                asChild={!item.children}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => item.children && toggleSection(item.title)}
              >
                {item.children ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openSections.includes(item.title) ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : (
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                )}
              </Button>
              {item.children && (
                <div
                  className={`ml-4 mt-1 grid gap-1 overflow-hidden transition-all ${
                    openSections.includes(item.title) ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <Button
                      key={child.title}
                      asChild
                      variant={pathname === child.href ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Link href={child.href}>{child.title}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}


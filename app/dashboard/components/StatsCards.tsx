import { FileText, FolderOpen, Grid2X2, LayersIcon, Settings, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

const stats = [
  {
    title: "Documents",
    value: "1",
    icon: FileText,
  },
  {
    title: "Classes",
    value: "1",
    icon: FolderOpen,
  },
  {
    title: "Jobs",
    value: "4",
    icon: Grid2X2,
  },
  {
    title: "Schemas",
    value: "1",
    icon: LayersIcon,
  },
  {
    title: "Standardizations",
    value: "1",
    icon: Settings,
  },
  {
    title: "Analyses",
    value: "0",
    icon: Zap,
  },
]

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


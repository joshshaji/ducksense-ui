import { Button } from "@/app/components/ui/button"
import { RefreshCw, Upload } from "lucide-react"
import StatsCards from "./components/StatsCards"
import AccountOverview from "./components/AccountOverview"
import CreditUsage from "./components/CreditUsage"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Home</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-2">
        <AccountOverview />
        <CreditUsage />
      </div>
    </div>
  )
}


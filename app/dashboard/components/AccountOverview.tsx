import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CreditCard, RefreshCcw, Timer, DollarSign, Receipt } from "lucide-react"

export default function AccountOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Plan</p>
            <p className="text-sm text-muted-foreground">Starter</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Timer className="h-5 w-5 text-blue-600" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Credits Remaining</p>
            <p className="text-sm text-muted-foreground">290</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <DollarSign className="h-5 w-5 text-blue-600" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Credits Overage</p>
            <p className="text-sm text-muted-foreground">0</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Receipt className="h-5 w-5 text-blue-600" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Upcoming Invoice</p>
            <p className="text-sm text-muted-foreground">$0</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <RefreshCcw className="h-5 w-5 text-blue-600" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Next Refresh</p>
            <p className="text-sm text-muted-foreground">March 9, 2025</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const usageData = [
  {
    action: "Standardize",
    count: 2,
    credits: 8,
  },
  {
    action: "Document Upload",
    count: 1,
    credits: 2,
  },
  {
    action: "Standardize Batch",
    count: 1,
    credits: 0,
  },
]

export default function CreditUsage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Usage</CardTitle>
        <CardDescription>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">CURRENT BILLING CYCLE</span>
            <span className="text-sm text-muted-foreground">ALL TIME</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action Type</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Credits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usageData.map((row) => (
              <TableRow key={row.action}>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>{row.credits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>Used Credits: 10</div>
          <div className="flex items-center gap-4">
            <div>1-3 of 3</div>
            <div className="flex gap-1">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" disabled>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


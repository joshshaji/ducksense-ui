"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { Input } from "@/app/components/ui/input"
import { ChevronDown, Download, FileText, Filter, MoreHorizontal, Plus, Upload } from "lucide-react"
import { Badge } from "@/app/components/ui/badge"
import { Card } from "@/app/components/ui/card"

// Sample data
const documents = [
  {
    id: "7a14339a",
    filename: "2025-02-06-18-50-EmiratesT",
    classIds: ["b5382cd"],
    classNames: ["Flight itinerary"],
    pages: 2,
    type: "PDF",
    dataset: "unassigned",
    lang: "EN",
    timestamp: "2025-02-06 06:50 PM",
  },
  // Add more sample documents here
]

export function DocumentsOverview() {
  const [selectedDocs, setSelectedDocs] = useState<string[]>([])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and process your documents</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="flex items-center gap-4 border-b p-4">
          <Button variant="secondary" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            Standardize
          </Button>
          <Button variant="secondary" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Schema
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <Input placeholder="Search documents..." className="w-64" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  All Documents
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Documents</DropdownMenuItem>
                <DropdownMenuItem>Recent Documents</DropdownMenuItem>
                <DropdownMenuItem>Archived Documents</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedDocs(documents.map((d) => d.id))
                    } else {
                      setSelectedDocs([])
                    }
                  }}
                />
              </TableHead>
              <TableHead>Filename</TableHead>
              <TableHead>Doc ID</TableHead>
              <TableHead>Class Names</TableHead>
              <TableHead>Pages</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Dataset</TableHead>
              <TableHead>Lang</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    checked={selectedDocs.includes(doc.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedDocs([...selectedDocs, doc.id])
                      } else {
                        setSelectedDocs(selectedDocs.filter((id) => id !== doc.id))
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{doc.filename}</TableCell>
                <TableCell className="font-mono text-sm">{doc.id}</TableCell>
                <TableCell>
                  {doc.classNames.map((name) => (
                    <Badge key={name} variant="secondary" className="mr-1">
                      {name}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell>{doc.pages}</TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>{doc.dataset}</TableCell>
                <TableCell>{doc.lang}</TableCell>
                <TableCell className="text-sm text-gray-500">{doc.timestamp}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}


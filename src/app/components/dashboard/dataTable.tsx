import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star } from "lucide-react";

const products = [
  {
    product: "Camera Mi 360",
    soldAmount: "432",
    unitPrice: "$120",
    revenue: "$51,840",
    rating: 4.5,
  },
  {
    product: "Massage Gun",
    soldAmount: "120",
    unitPrice: "$112",
    revenue: "$25,440",
    rating: 4.8,
  },
  {
    product: "Vacuum-Mop 2 Pro",
    soldAmount: "221",
    unitPrice: "$320",
    revenue: "$15,123",
    rating: 4.2,
  },
  {
    product: "Vacuum-Mop 2",
    soldAmount: "223",
    unitPrice: "$234",
    revenue: "$32,812",
    rating: 4.7,
  }
];

export function TopProductsTable() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Top products</h1>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-3xl">
                Full results
                <span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Full results</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Product</TableHead>
            <TableHead className="text-right">Sold amount</TableHead>
            <TableHead className="text-right">Unit price</TableHead>
            <TableHead className="text-right">Revenue</TableHead>
            <TableHead className="text-right">Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.product}>
              <TableCell className="font-medium">{product.product}</TableCell>
              <TableCell className="text-right">{product.soldAmount}</TableCell>
              <TableCell className="text-right">{product.unitPrice}</TableCell>
              <TableCell className="text-right">{product.revenue}</TableCell>
              <TableCell className="text-right flex items-center justify-end gap-2"> 
                <span>
                  <Star className="h-4 w-4 fill-yellow-600 text-yellow-600" />
                </span>
                <span>{product.rating}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import { ColumnDef } from "@tanstack/vue-table"
import DropdownAction from '@/components/DataTableDropDown.vue'
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Payment {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  }
]
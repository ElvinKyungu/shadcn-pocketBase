<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'

const tasks = [
  {
    id: 1,
    name: 'Lire la documentaion de vuejs',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    id: 2,
    name: 'Travailler sur Shadcn + PocketBase',
    taskStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
]
</script>

<template>
  <Table>
    
  </Table>
</template>
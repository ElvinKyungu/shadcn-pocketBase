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
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader class=" ">
      <TableRow class="">
        <TableHead class="w-full">
          Terminer
        </TableHead>
        <TableHead class="w-full">
          Tâches
        </TableHead>
        <TableHead>
          Status
        </TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">
          Amount
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow 
        class=""
        v-for="task in tasks" 
        :key="task.id"
      >
        <TableCell class="font-medium">
          <Checkbox id="terms" class="p-2"/>
        </TableCell>
        <TableCell class="font-medium">
          {{ task.name }}
        </TableCell>
        <TableCell class="">
          {{ task.taskStatus }}
        </TableCell>
        <TableCell class=" text-left">
          {{ task.taskStatus }}
        </TableCell>
        <TableCell class="">
          {{ task.taskStatus }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
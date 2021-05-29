const rows = [
  { id: 1, name: 'Ronaldo', email: 'ronaldo@email.com' },
  { id: 2, name: 'Arthur', email: 'arthur@email.com' },
  { id: 3, name: 'Jessica', email: 'jessica@email.com' },
  { id: 4, name: 'Charles', email: 'charles@email.com' },
  { id: 5, name: 'Livia', email: 'livia@email.com' }
]

export const getCustomers = (): Promise<
  Array<{ id: number; name: string; email: string }>
> => {
  return new Promise(resolve => {
    resolve(rows)
  })
}

export const getCustomerById = (
  id: number
): Promise<{ id: number; name: string; email: string }> => {
  return new Promise(resolve => {
    const result = rows.find(row => row.id === id)
    resolve(result)
  })
}

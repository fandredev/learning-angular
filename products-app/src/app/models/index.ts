
interface Department {
  id?: number
  name: string
}
interface Product {
  id?: number
  name: string
  price: number
  description: string
  department: Department
}


export { Department, Product };

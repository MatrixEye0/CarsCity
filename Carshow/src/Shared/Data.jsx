import { icons } from "lucide-react"


const CarMakes=[
    {
        id:1,
        name:'Audi'
    },
    {
        id:2,
        name:'BMW'
    },
    {
        id:3,
        name:'Mercedes'
    },
    {
        id:4,
        name:'Toyota'
    },
    {
        id:5,
        name:'Rolls Royal'
    },
]

const Pricing=[
    {
        id:1,
        amount:'1,000$'
    },
    {
        id:2,
        amount:'10,000$'
    },
    {
        id:3,
        amount:'20,000$'
    },
    {
        id:4,
        amount:'25,000$'
    },
    {
        id:5,
        amount:'50,000$'
    },
    {
        id:6,
        amount:'100,000$+'
    }
    
]

const Category=[
    {
        id:1,
        name:'SUV',
        icons:'/suv.png'
    },
    {
        id:2,
        name:'Seden',
        icons:'/seden.png'
    },
    {
        id:3,
        name:'Hatchback',
        icons:'/hatchback.png'
    },
    {
        id:4,
        name:'Coupe',
        icons:'/coupe.png'
    },
    {
        id:5,
        name:'Hybrid',
        icons:'/hybrid.png'
    },
    {
        id:6,
        name:'Convertible',
        icons:'/convertible-car.png'
    },
    {
        id:7,
        name:'Van',
        icons:'/van.png'
    },
    {
        id:8,
        name:'Truck',
        icons:'/long-truck.png'
    },
    {
        id:9,
        name:'Electric',
        icons:'/electric-car.png'
    }

]

export default{
    CarMakes,
    Pricing,
    Category
}
import express,{Express,Request,Response} from "express"
import { createConnection } from "typeorm";
import { Product } from "./schema/product.db";
import { Categories } from "./schema/categories_db";





const app:Express = express()

app.get('/',(req:Request,res:Response)=>{
    res.send('Working')
})


const main = async () => {
    const connection = await createConnection({
        type:"postgres",
        host:"localhost",
        port:5433,
        username:"konvict",
        password:"2130",
        database:"Ecommerce",
        synchronize:true,
        entities:[Product,Categories]
    })
    console.log("Connected to PG");
}


app.listen(3000,()=>{console.log("App working!")});

main()
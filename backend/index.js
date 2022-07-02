import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app= express();
import pg from "pg";
const { Pool } = pg;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pgClient = new Pool({
    host: process.env.HOST_POSTGRESQL,
    user: process.env.USER_POSTGRESQL,
    port: Number(process.env.PORT_POSTGRESQL),
    password: process.env.PASSWORD_POSTGRESQL,
    database: process.env.DATABASE_POSTGRESQL,
  });

app.post('/form',async(req,res)=>{
    const {name,surname,email,tel,coupon} = req.body
    console.log(req.body)
    const sql = 'INSERT INTO users(FirstName,LastName,Email,PhoneNumber,Coupon)VALUES($1,$2,$3,$4,$5)'
    const { rows } = await pgClient.query(sql, [
        name,
        surname,
        email,
        tel,
        coupon,
      ]);
    res.send(rows)
})

app.listen(3030,()=>{
    console.log("listening on 3030")
})
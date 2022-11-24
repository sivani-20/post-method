const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port=3000;

app.use(bodyparser.urlencoded({
	extended:true
}))
app.use(bodyparser.json())
app.use(cors())
app.get("/",(req,res)=>{

	res.send("server is start")
})
app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const {name,password}=req.body;
	console.log(name,password)
	res.send("added successfully")
})
app.listen(port,()=>console.log("server is starting on port 3000"))



















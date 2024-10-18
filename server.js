const app = require("./app")
const PORT = 6401

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use("/",express.static(__dirname+ "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine',"ejs")

app.get("/",(req,res)=>{
    res.render("index")
})
const helmet = require('helmet');


app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'trusted.cdn.com'],
    styleSrc: ["'self'", 'trusted.cdn.com'],
    imgSrc: ["'self'", 'data:'],
    connectSrc: ["'self'"],
    fontSrc: ["'self'", 'trusted.cdn.com'],
    frameSrc: ["'self'"]
  }
}));
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://vaishnavitirupatitours.com/</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>
</urlset>`;
  res.send(sitemap);
});

const formRouter = require("./routes/form.route")
app.use("/enquiry",formRouter)


module.exports = app



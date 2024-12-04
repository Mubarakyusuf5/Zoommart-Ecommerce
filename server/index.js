const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express()

const corsOptions = {
    origin: "http://localhost:5173", // Set to the origin of your frontend
    credentials: true,              
  };
app.use(cookieParser())
app.use(express.json())
app.use(cors(corsOptions))


app.use("/auth", require("./routes/authRoute"))
app.use("/api", require("./routes/productRoute"))
// app.use("/api/admin", )
// app.use("/api/customer", )
// app.use("/api/vendor", )


const port = process.env.PORT || 6001;
const url = process.env.MONGO_URL;

mongoose.connect(url)
  .then(() => console.log("Connected to MongoDB Database"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
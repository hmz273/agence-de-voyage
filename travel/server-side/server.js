const express = require("express");
const connectDB = require("./db");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 2000;


connectDB();

app.use(express.json());
app.use(cors()); 
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/auth", require("./Auth/route"));
app.use("/api/travel", require("./Travel/route"));
app.use("/api/booking", require("./Booking/route"));




const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});

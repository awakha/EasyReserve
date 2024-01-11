require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// routes import

const indexRouter = require("./routes/indexRouter");
const adminRouter = require("./routes/adminRouter");
const mapRouter = require("./routes/mapRouter");
const restRouter = require("./routes/restRouter");

const userRouter = require("./routes/userRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

// routes

app.use("/api", indexRouter);
app.use("/admin", adminRouter);
app.use("/api", mapRouter);
app.use("/api/restaurants", restRouter);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});

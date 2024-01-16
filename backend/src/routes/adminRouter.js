const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const { Restaurant } = require("../../db/models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadFolder = path.join(process.cwd(), 'src/uploads');
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  try {

    const rests = await Restaurant.findAll({ raw: true, nest: true });

    res.json(rests);
  } catch (err) {
    res.status(401).json(err);
  }
});

router.post("/", upload.array('images', 5), async (req, res) => {
  try {
    const images = req.files.map(file => file.path);
    const rest = await Restaurant.create({ ...req.body, images });
    const restData = rest.get();
    res.json(restData);
  } catch (err) {
    console.log(err.message)
    res.status(500).send('Internal Server Error');
  }
});

router.put("/", async (req, res) => {
  const { id, ...restData } = req.body;
  try {
    const rest = await Restaurant.findByPk(id);
    rest.name = restData.name;
    rest.description = restData.description;
    rest.address = restData.address;
    rest.images = restData.images;
    rest.cuisineId = restData.cuisineId;
    rest.cityId = restData.cityId;
    rest.timetableId = restData.timetableId;
    await rest.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.query;
  try {
    await Restaurant.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;


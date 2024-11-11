const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const { Restaurant, City, Timetable, Cuisine } = require('../../db/models');
const { log } = require('console');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //full path to public folder on client
    const uploadFolder = '/Users/yanutstas/Desktop/Elbrus/EasyReserve/client/public';
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname;
    cb(null, ext);
  },
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
  try {
    const rests = await Restaurant.findAll({ raw: true, nest: true });

    res.json(rests);
  } catch (err) {
    res.status(401).json(err);
  }
});

router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const images = req.files.map((file) => file.originalname);
    const rest = await Restaurant.create({ ...req.body, images });
    const restData = rest.get();
    res.json(restData);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/', async (req, res) => {
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

router.delete('/', async (req, res) => {
  const { id } = req.query;
  try {
    await Restaurant.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

router.get('/additional', async (req, res) => {
  try {
    const cities = await City.findAll({ attributes: ['id', 'name'] });
    const cuisines = await Cuisine.findAll({ attributes: ['id', 'name'] });
    const timetables = await Timetable.findAll({
      attributes: ['id', 'openTime'],
    });

    res.json({ cities, cuisines, timetables });
  } catch (error) {
    res.json({ status: 500, message: error.message });
  }
});

module.exports = router;

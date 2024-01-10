const router = require("express").Router();
const { Restaurant } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const rests = await Restaurant.findAll({ raw: true, nest: true });
    res.json(rests);
  } catch (err) {
    res.status(401).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const rest = await Restaurant.create(req.body);
    console.log(req.body)
    const restData = rest.get();
    res.json(restData);
  } catch (err) {
    console.log(err.message)
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

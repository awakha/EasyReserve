const router = require("express").Router();
const { Restaurant } = require("../../db/models");

//Роутер на ПОКАЗ рестиков - РАБОТАЕТ
router.get("/", async (req, res) => {
  try {
    const rests = await Restaurant.findAll({ raw: true, nest: true });
    res.json(rests);
  } catch (err) {
    res.status(401).json(err);
  }
});

//Роутер на добавление - РАБОТАЕТ
router.post("/", async (req, res) => {
  try {
    const rest = await Restaurant.create(req.body);
    const restData = rest.get();
    res.json(restData);
  } catch (err) {
    res.status(401).json(err);
  }
});

//Роутер на изменение 
// router.put("/:id", async (req, res) => {
//   try {
//     const rest = await Restaurant.findByPk(req.params.id);
//     rest.isComplited = !rest.isComplited;
//     await rest.save();
//     res.json(rest);
//   } catch (err) {
//     res.status(401).json(err);
//   }
// });

//Роутер по карточкам рестиков
//   router.get('/car/:id', async (req, res) => {
//     try {
//       const todo = await Car.findByPk(req.params.id);
//       res.json(todo);
//     } catch (err) {
//       res.status(401).json(err);
//     }
//   });

//Роутер на изменение - ВРОДЕ БЫ РАБОТАЕТ
router.put("/", async (req, res) => {
  const { id, ...restData } = req.body;
  try {
    const rest = await Restaurant.findByPk(id);
    rest.name = name;
    rest.description = description;
    rest.address = address;
    rest.images = images;
    rest.cuisineId = cuisineId;
    rest.cityId = cityId;
    rest.timetableId = timetableId;
    rest.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400);
  }
});

//Роутер на удаление - РАБОТАЕТ
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

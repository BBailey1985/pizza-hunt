const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes')

//add prefix of `/pizzas` to pizza-routes.js
router.use('/pizzas', pizzaRoutes);

module.exports = router;
const express = require('express');
const app = express();
const itemRoutes = express.Router();

//  Подключение схемы Item
const Item = require('../models/Item');

// Определение маршрута для добавления позиции в базу
itemRoutes.route('/add').post((req, res) => {
  const item = new Item(req.body);
  item.save()
  .then(item => res.status(200).json({ 'item': 'Item added succesfully' }))
  .catch(error => res.status(400).json('unable to save to database'));
});

// Определение маршрута для выборки всех позиций из базы
itemRoutes.route('/').get((req, res) => {
  Item.find((error, items) => {
    if (error) {
      console.log(error);
    } else {
      res.json(items);
    }
  });
});

itemRoutes.route('/edit/:id').get((req, res, next) => {
  Item.findById(req.params.id, (error, item) => {
    if (!item) return next(new Error('Could not load Document'));
    res.json(item);
  });
});

// Определение маршрута для редактирования позиции
itemRoutes.route('/update/:id').post((req, res, next) => {
  Item.findById(req.params.id, (error, item) => {
    if (!item) return next(new Error('Could not load Document'));
    item.name = req.body.name;
    item.price = req.body.price;

    item.save()
      .then(item => res.json('Update complete'))
      .catch(error => res.status(400).send('Unable to update the database'));
  });
});

// Определение маршрута для удаления записи из базы
itemRoutes.route('/delete/:id').get((req, res) => {
  Item.findByIdAndRemove({ _id: req.params.id }, (error, item) => {
    if (error) res.json(error);
    else res.json('Successfully removed');
  });
});

module.exports = itemRoutes;

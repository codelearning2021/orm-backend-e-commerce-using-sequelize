const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then(tag => res.json(tag))
  .catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  ProductTag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
    .then(cat => res.json(cat))
    .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  console.log(req.body);
  ProductTag.create(req.body)
    .then(cat => res.json(cat))
    .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  ProductTag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(cat => res.json(cat))
    .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  ProductTag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(cat => res.json(cat))
    .catch(err => res.status(500).json(err))
});
module.exports = router;

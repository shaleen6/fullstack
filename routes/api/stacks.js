const express = require("express");
const router = express.Router();

const Stack = require("../../models/Stack");

router.get("/", (req, res) => {
  Stack.find().then(stacks => res.json(stacks));
});

router.get("/stack/:id", (req, res) => {
  Stack.findById(req.params.id).then(stacks => res.json(stacks));
});

router.post("/stack_form", (req, res) => {
  console.log(req.body);
  const newStack = new Stack({
    title: req.body.title,
    cards: req.body.cards
  });
  console.log(newStack);
  newStack.save().then(stack => res.json(stack));
});
module.exports = router;

import diskdb from 'diskdb';

const db = diskdb.connect('./db/', ['sets', 'parts']);

export default async (req, res) => {
  const {
    setId,
    partId,
  } = req.query;

  const options = {
    multi: false,
    upsert: false,
  };

  const prev = db.parts.findOne({ setId, partId });
  const prevSet = db.sets.findOne({ id: setId });

  db.parts.update({
    _id: prev._id,
  }, {
    collected: prev.collected + 1,
  }, options);

  db.sets.update({
    _id: prevSet._id,
  }, {
    collected: prevSet.collected + 1,
  }, options);

  res.status(200).json({ updatedCountTo: prev.collected + 1, remaining: prev.quantity - (prev.collected + 1) });
};

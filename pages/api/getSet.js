import diskdb from 'diskdb';

const db = diskdb.connect('./db/', ['sets', 'parts']);

export default async (req, res) => {
  const {
    setId,
  } = req.query;

  const set = db.sets.find({ id: setId });
  const parts = db.parts.find({ setId });

  res.status(200).json({ ...set[0], parts });
};

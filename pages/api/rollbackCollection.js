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

  if (prev.collected !== 0) {
    const updated = db.parts.update({
      // eslint-disable-next-line no-underscore-dangle
      _id: prev._id,
    }, {
      collected: prev.collected - 1,
    }, options);

    const updatedSet = db.sets.update({
      // eslint-disable-next-line no-underscore-dangle
      _id: prevSet._id,
    }, {
      collected: prevSet.collected - 1,
    }, options);

    res.status(200).json({ updated, updatedSet });
  } else {
    res.status(500).json('Already at 0!');
  }
};

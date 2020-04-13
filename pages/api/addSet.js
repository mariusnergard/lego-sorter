import diskdb from 'diskdb';
import axios from 'axios';

const db = diskdb.connect('./db/', ['sets']);
const partsDb = diskdb.connect('./db/', ['parts']);

export default async (req, res) => {
  const {
    setId,
  } = req.query;
  const setRes = await axios.get(`https://rebrickable.com/api/v3/lego/sets/${setId}/parts/`, {
    params: {
      page_size: 3000
    },
    headers: {
      Authorization: `key ${process.env.rebrickableApiKey}`,
    },
  });

  const set = {
    id: setId,
    count: setRes.data.count,
    collected: 0,
    completed: false,
  };

  const newSet = db.sets.save(set);

  for (let b = 0; b < setRes.data.results.length; b++) {
    const partNumber = `${setRes.data.results[b].part.part_num}_${setRes.data.results[b].color.name}`;
    partsDb.parts.save({
      partId: partNumber,
      setId,
      img: setRes.data.results[b].part.part_img_url,
      quantity: setRes.data.results[b].quantity,
      collected: 0,
    });
  }

  const parts = db.parts.find({ setId });

  res.status(200).json({ ...newSet, parts });
};

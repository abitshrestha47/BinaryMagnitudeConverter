const express = require("express");
const generaterouter = express.Router();
const conversions = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};

generaterouter.get("/", (req, res) => {
  const { from, to, character } = req.query;
  parsedcharacter = parseInt(character);
  if (parseInt(to) === parseInt(from) && parsedcharacter) {
    return res.json(parsedcharacter);
  }
  //TO CONVERT BYTES TO KB || KB TO MB || MB TO GB AND SO ON
  else if (conversions[from] === parseInt(to) && parsedcharacter) {
    return res.json(parsedcharacter / 1024);
  }

  //TO CONVERT BYTES TO MB || KB TO GB AND SO ON
  else if (conversions[from] + 1 === parseInt(to) && parsedcharacter) {
    return res.json(parsedcharacter / (1024 * 1024));
  }

  //TO CONVERT BYTES TO GB || KB TO TB AND SO ON
  else if (conversions[from] + 2 === parseInt(to) && parsedcharacter) {
    return res.json(parsedcharacter / (1024 * 1024 * 1024));
  }

  //TO CONVERT BYTES TO TB || KB TO PB AND SO ON
  else if (conversions[from] + 3 === parseInt(to) && parsedcharacter) {
    return res.json(parsedcharacter / (1024 * 1024 * 1024 * 1024));
  }

  //TO CONVERT BYTES TO PB AND SO ON
  else if (conversions[from] + 4 === parseInt(to) && parsedcharacter) {
    return res.json((parsedcharacter / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(5));
  }

  //TO CONVERT VICE VERSA FROM KB TO BYTES AND SO ON
  else if (parseInt(from) === conversions[to] && parsedcharacter) {
    return res.json(parsedcharacter * 1024);
  }
  else if (parseInt(from)===conversions[to]+1){
    return res.json(parsedcharacter*1024*1024);
  }
  else if (parseInt(from)===conversions[to]+2){
    return res.json(parsedcharacter*1024*1024*1024);
  }
  else if (parseInt(from)===conversions[to]+3){
    return res.json(parsedcharacter*1024*1024*1024*1024);
  }
  else if (parseInt(from)===conversions[to]+4){
    return res.json((parsedcharacter*1024*1024*1024*1024*1024).toFixed(5));
  }
  // if(((from==='0' && to==='1') || (from==='2' && to==='3') || (from==='4' && to==='5')) && character){
  //     return res.json(parsedcharacter/1024);
  // }
  // if(((from==='3' && to==='2') || (from==='1' && to==='0')) && character){
  //     return res.json(parsedcharacter*1024);
  // }
  // if((['0','2','4'].includes(from)) && (['1','3','5'].includes(to))  && character){
  //     return res.json(parsedcharacter/1024);
  // }
  // if((['0']).includes(from) && (['2'].includes(to)) && character){
  //     return res.json(parsedcharacter/(1024*1024));
  // }
  // if((['1','3','5'].includes(from)) && (['0','2','4'].includes(to))  && character){
  //     return res.json(parsedcharacter*1024);
  // }
});

module.exports = generaterouter;

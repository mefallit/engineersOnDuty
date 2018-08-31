/* eslint-disable prefer-template */
import {Parser} from 'json2csv';
import {writeFile} from 'fs';
import DutyModel from '../models/DutyModel';

const DutyController = {};
const dutyModel = new DutyModel();

// Testing demo JSON output
DutyController.get = (req, res) => {
  const json = dutyModel.createDutyJson(req);
  const fields = ['Subject', 'Start Date', 'Start Time', 'All Day Event', 'Description'];
  const csv = new Parser({fields}).parse(json);

  const path = './public/csv/file' + Date.now() + '.csv';

  writeFile(path, csv, (err) => {
    if (err) {
      res.send('Something went wrong..');
      throw err;
    } else {
      res.download(path);
    }
  });
};

export default DutyController;

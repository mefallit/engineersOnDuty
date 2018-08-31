"use strict";
import {daysInMonth} from '../util';
import engineerTeams from '../constants';

class DutyModel {

  createDutyJson(req) {
    let result = [];
    const params = req.params,
      count = this.dayCount(req.params);

    for (let key in engineerTeams) {
      let name = this.getRandomName(engineerTeams[key]);

      for (let i = 1; i <= count; i++) {
        let date = params.month + '/' + i + '/' + params.year;
        result.push({
          'Subject': `${key} : ${name()}`,
          'Start Date': date,
          'Start Time' : '10:00 AM',
          'All Day Event': 'True',
          'Description': `${key} duty on ${date}`
        })
      }

    }

    return result;
  }


  dayCount(params) {
    return daysInMonth(params.month, params.year);
  }


  getRandomName(team) {
    let copy = team.slice(0);
    return function() {
      if (copy.length < 1)
        copy = team.slice(0);
      const index = Math.floor(Math.random() * copy.length);
      const item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
}

export default DutyModel;

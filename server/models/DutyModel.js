import {daysInMonth, checkWeekend} from '../util';
import engineerTeams from '../constants';

class DutyModel {
  createDutyJson(req) {
    const result = [];
    const {month, year} = req.params;
    const count = this.dayCount(req.params);

    for (const key in engineerTeams) {
      if (Object.prototype.hasOwnProperty.call(engineerTeams, key)) {
        const name = this.getRandomName(engineerTeams[key]);

        for (let i = 1; i <= count; i += 1) {
          if (!checkWeekend(i, month, year)) {
            const date = `${month}/${i}/${year}`;
            result.push({
              Subject: `${key} : ${name()}`,
              'Start Date': date,
              'Start Time': '10:00 AM',
              'All Day Event': 'True',
              Description: `${key} duty on ${date}`,
            });
          }
        }
      }
    }
    return result;
  }


  dayCount(params) {
    return daysInMonth(params.month, params.year);
  }


  getRandomName(team) {
    let copy = team.slice(0);
    return function () {
      if (copy.length < 1) copy = team.slice(0);
      const index = Math.floor(Math.random() * copy.length);
      const item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
}

export default DutyModel;

module.exports = function createDreamTeam(members) {
  let team = [];

  if (members === null || members === undefined) return false;
  else {
    for (let i = 0; i < members.length; i++){
      if (typeof members[i] == 'string') {
        team.push(members[i].replace(/\s+/g, '').split(','));
      }
    }

  }
  return team.map(item => item[0][0]).join('').toUpperCase().split('').sort().join('');
};

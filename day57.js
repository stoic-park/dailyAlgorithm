var findJudge = function (N, trust) {
  let trustCounts = new Array(N + 1).fill(0);
  for (let [a, b] of trust) {
    trustCounts[a] = trustCounts[a] - 1;
    trustCounts[b] = trustCounts[b] + 1;
  }

  for (let i = 1; i < trustCounts.length; i++) {
    if (trustCounts[i] === N - 1) {
      return i;
    }
  }
  return -1;
};

var findJudge = function (N, trust) {
  var heTrust = new Array(N + 1).fill(0);
  var trustHim = new Array(N + 1).fill(0);

  for (var i = 0; i < trust.length; i++) {
    heTrust[trust[i][0]]++;
    trustHim[trust[i][1]]++;
  }

  var result = [];
  var maxTrust = N - 1;
  for (var i = 1; i <= N; i++) {
    if (heTrust[i] === 0 && trustHim[i] === maxTrust) {
      result.push(i);
    }
  }

  return result.length === 1 ? result[0] : -1;
};

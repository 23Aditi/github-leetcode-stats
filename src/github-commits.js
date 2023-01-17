/**
 * github fetcher
 */

const axios = require("axios").default;

let info = {
	github: {
		totalRepositories: 0,
		totalCommits: 0,
		contributions: 0,
		pullRequests: 0,
		closedIssues: 0,
		followers: 0
	  },
	};

const setData = async (res) => {
	let object = JSON.parse(res)["data"];
    
    info.github.totalRepositories = object["user"]["repositories"]["totalCount"],
    info.github.totalCommits = object["user"]["contributionsCollection"]["totalCommitContributions"],
    info.github.contributions =  object["user"]["repositoriesContributedTo"]["totalCount"],
    info.github.pullRequests =  object["user"]["pullRequests"]["totalCount"],
    info.github.closedIssues =  object["user"]["closedIssues"]["totalCount"],
    info.github.followers =  object["user"]["followers"]["totalCount"]
	}

  const get = async (username, token) => {

	////Authorization: `bearer ${token}`,

    let body = {
      query: `
			query {
			user(login: "${username}") {
			  name
			  login
			  contributionsCollection {
				totalCommitContributions
				restrictedContributionsCount
			  }
			  repositoriesContributedTo(contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
				totalCount
			  }
			  pullRequests {
				totalCount
			  }
			  openIssues: issues(states: OPEN) {
				totalCount
			  }
			  closedIssues: issues(states: CLOSED) {
				totalCount
			  }
			  followers {
				totalCount
			  }
			  repositories(ownerAffiliations: OWNER) {
				totalCount
			  }
			}
		  }
		`,
      variables: {},
    };
    let options = {
      headers: {
        "Content-Type": "application/json",
		auth : process.env.GITHUB_TOKEN,
      },
    };
    await axios
      .post("https://api.github.com/graphql", body, options)
      .then(async (response) => {
        //console.log(JSON.stringify(response.data));
		setData(JSON.stringify(response.data));
      });
  };

  exports.get = get;
  exports.setData = setData;
  exports.info = info;

const profileDataArgs = process.argv.slice(2);
const [Name, github] = profileDataArgs;



const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };

  console.log(Name, github);
  console.log(generatePage(Name, github));
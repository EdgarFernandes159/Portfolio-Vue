import axios from "axios";
import RepositoryInfo from "../models/RepositoryInfo"


export default new (class GithubMethods{
    async getRepository() {
        //YOUR GITHUB USERNAME
        this.userName = `MicrosoftLearning`;
        let repositories = await axios.get(`https://api.github.com/users/${this.userName}/repos`);
        console.log(repositories)
        return repositories.data.map(repo =>
            new RepositoryInfo(
                repo.name,
                repo.svn_url,
                repo.language,
                repo.description
        )   )   
    }
})(); 
export default class RepositoryInfo{
    constructor(name,svn_url,language,description) {
        this.name = name;
        this.url = svn_url;
        this.language = language;
        this.description = description;
    }
}
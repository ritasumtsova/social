import { AuthService } from './../../services/auth.service';
import { NewsService } from '../../services/news.service';

export class NewsComponent {
    constructor() {
        this._newsService = new NewsService();
        this._authService = new AuthService();

        this._authUserToken = this._authService.token;
        this.news = null;
        this.html = document.querySelector('app-container');
    };

    async beforeRender() {
        this.news = await this._newsService.getNews(this._authUserToken);
    };

    render() {
        return `<img src="${this.news.news[0].pictures[0].url}"></img>
        <div>${this.news.news[0].owner.full_name}</div>
        <a href="/#/winners">Go to Winners</a>`
    };
}
import { WinnersService } from '../../services/winners.service';

export class WinnersComponent {
    constructor() {
        this._winnersService = new WinnersService();

        this.winners = null;
        this.html = document.querySelector('app-container');
    }

    async beforeRender() {
        this.winners = await this._winnersService.getWinners(2,10);
    }

    render() {
        const { winners } = this.winners;

        if (Array.isArray(winners) && winners.length) {
            const winnersList = winners.map(winner => (
                `<div class="container">
                    <div class="row">
                        <div class="text-xs-left">${winner.member_id.user_id.full_name}: ${winner.member_id.points}</div>
                    </div>
                </div>`
            )).join('');

            return this.html.innerHTML = winnersList;

        } else {
            return null;
        }   
    }
}
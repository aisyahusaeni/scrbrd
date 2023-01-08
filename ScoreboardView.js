export default class ScoreboardView {
    constructor(root, playerOneName, playerTwoName, onscorechange){
        this.root = root;
        this.root.innerHTML = '
            <div class="scoreboard">
                <div class="scoreboard__name scoreboard__name--one">${playerOneName}</div>
                <div class="scoreboard__name scoreboard__name--two">${playerTneName}</div> 
                <div class="scoreboard__score" data-for-player="one">0</div>
                <div class="scoreboard__score" data-for-player="two">0</div>
                <div class="scoreboard__controls">
                    <button class="scoreboard__control--button">-</button>
                    <button class="scoreboard__control--button">+</button>
                </div> 
                <div class="scoreboard__controls">
                    <button class="scoreboard__control--button">-</button>
                    <button class="scoreboard__control--button">+</button>    
                </div>
            </div> 
        ';
    }
}
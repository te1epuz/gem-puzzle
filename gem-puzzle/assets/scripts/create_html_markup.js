export function create_html_markup () {
body.innerHTML =
`<header>
    <div class="header__wrapper">
        <nav class="header__nav">
            <ul>
                <li><button id="new_game_btn">new game</button>
                    <div>
                        <button id="new_game_less">-</button>
                        <div id="new_game_size">4х4</div>
                        <button id="new_game_more">+</button>
                    </div>
                </li>
                <li><button id="auto_save_btn"title="save game state on page reload">auto save</button></li>
                <li><button id="sound_btn">sound</button></li>
            </ul>
        </nav>
        <div id="win_window" class="hidden">
            <div>
                <p id="win_message">Hooray! You solved the puzzle </br> in si##:## and N moves!</p>
                <button id="win_message_btn">Ok</button>
            </div>
        </div>
    </div>
</header>
<main>
    <div class="main__wrapper">
        <div class="main__stats">
            <div>moves: <span id="main__stats_moves">0</span></div>
            <div>time: <span id="main__stats_time">00:00</span></div>
        </div>
        <div class="main__game"></div>
        <div class="main__top_score">top 10 score:</div>
        <div id="main__top_results"></div>
    </div>
</main>`
}
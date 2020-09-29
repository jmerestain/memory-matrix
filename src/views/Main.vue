<template>
    <div class="container mx-auto h-screen flex flex-col justify-center">
        <div class="m-auto flex flex-wrap pt-5 justify-center gap-2 items-center">
            <div id="box" class="flex p-5 flex-wrap
            justify-between gap-2 rounded-md border-2 border-mechanics">
                <div id="0" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="1" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="2" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="3" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="4" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="5" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="6" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="7" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="8" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="9" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="10" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="11" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="12" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="13" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="14" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
                <div id="15" @click.stop="checkCell" class="bg-alphacamp h-16 w-16 mem-cell
                rounded-lg shadow-lg">
                &nbsp;
                </div>
            </div>
            <div class="flex flex-col p-4 gap-1 flex-grow max-w-sm select-none">
                <div id="startButton" @click="startGame"
                class="py-4 text-center bg-alphacamp text-white font-gotham
                text-4xl font-bold rounded-t-md shadow-inner border">
                    Play Now
                </div>
                <div class="px-6 py-2 text-center bg-alphacamp text-yellow-400 font-gotham
                text-white text-3xl font-bold shadow-inner border tracking-wider">
                <p><small>Score</small><br>{{ score }}</p>
                </div>
                <div class="flex flex-row gap-1 flex-grow">
                    <div class="px-6 py-4 text-center bg-alphacamp flex-grow font-gotham
                    text-white text-2xl rounded-bl-md shadow-inner border font-medium w-64">
                        <p>Timer<br>{{ timer.time }}</p>
                    </div>
                    <div class="px-6 py-4 text-center bg-alphacamp flex-grow
                    text-white text-2xl rounded-br-md shadow-inner border font-gotham w-48">
                        <p>Errors<br>{{ errors }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const wrongClass = 'bg-red-600 h-16 w-16 mem-cell cursor-not-allowed rounded-lg shadow-lg';
const correctClass = 'bg-green-600 h-16 w-16 mem-cell cursor-not-allowed rounded-lg shadow-lg';
const hoveredClass = 'bg-yellow-500 h-16 w-16 mem-cell rounded-lg shadow-lg border-px border-mechanics';
const normalClass = 'bg-alphacamp h-16 w-16 mem-cell rounded-lg shadow-lg';

export default {
  name: 'Game',
  components: {
  },
  data() {
    return {
      locked: true,
      diffLevel: 6,
      correct: 0,
      board: [],
      answers: [],
      score: 0,
      errors: 0,
      timer: {
        time: 30,
        instance: '',
      },
    };
  },
  methods: {
    randomCellPick(diffLevel) {
      // eslint-disable-next-line prefer-const
      this.answers = [];
      while (this.answers.length < diffLevel) {
        const r = Math.floor(Math.random() * 16);
        if (this.answers.indexOf(r) === -1) this.answers.push(r);
      }
      console.log(this.answers);
    },
    checkCell(e) {
      const cell = e.currentTarget;
      // eslint-disable-next-line radix
      const cellId = parseInt(cell.id);
      // eslint-disable-next-line no-restricted-syntax
      if (this.locked === false) {
        // eslint-disable-next-line eqeqeq
        if (cell.classList != correctClass && cell.classList != wrongClass) {
          if (this.answers.includes(cellId)) {
            cell.classList = correctClass;
            this.addScore(100);
            this.correct += 1;
          } else {
            cell.classList = wrongClass;
            this.addError(1, 40);
          }
        }
        if (this.correct === this.diffLevel) {
          this.newRound();
        }
      }
    },
    newRound() {
      this.timer.time += 1;
      this.correct = 0;
      this.cleanBoard();
      this.randomCellPick(this.diffLevel);
      this.displayCorrectAnswers();
    },
    addScore(added) {
      this.score += added;
    },
    addError(added, subtracted) {
      this.errors += added;
      this.score -= subtracted;
    },
    startTimer() {
      clearInterval(this.timer.instance);
      this.timer.time = 30;
      this.timer.instance = setInterval(async () => {
        this.timer.time -= 1;
        if (this.timer.time <= 0) {
          this.locked = true;
          clearInterval(this.timer.instance);
          this.$store.commit('setScore', this.score);
          this.sendScore(this.$store.highScore);
          this.$router.push('/score');
        }
      }, 1000);
    },
    async sendScore(score) {
      axios.post('https://alphacamp-wc-cme.com/api/get_user.php', {
        uid: this.$store.state.userId,
        game_id: 1,
        score,
      }).then((response) => {
        console.log(response);
      });
    },
    startGame() {
      // Set timer to 1 minute
      // Start countdown
      this.startTimer();
      this.score = 0;
      this.errors = 0;
      this.cleanBoard();
      this.randomCellPick(this.diffLevel);
      this.displayCorrectAnswers();
    },
    cleanBoard() {
      let i = 0;
      while (i < this.board.length) {
        this.board[i].classList = normalClass;
        i += 1;
      }
    },
    displayCorrectAnswers() {
      // eslint-disable-next-line no-var
      var i = 0;
      this.locked = true;
      for (i; i < this.answers.length; i += 1) {
        const ansIndex = this.answers[i];
        this.board[ansIndex].classList = hoveredClass;
      }
      setTimeout(() => {
        i = 0;
        for (i; i < this.answers.length; i += 1) {
          const ansIndex = this.answers[i];
          this.board[ansIndex].classList = normalClass;
        }
        this.locked = false;
      }, 1000);
    },
  },
  mounted() {
    this.board = this.$el.querySelectorAll('.mem-cell');
  },
};
</script>

<style scoped>
  @font-face {
    font-family: GothamMedium;
    src: url('../assets/font/gotham-score.otf');
  }
  .font-gotham {
    font-family: GothamMedium;
  }
  #box {
    height: 23rem;
    width: 23rem;
    background: #F4D7A1 90%;
  }
  .mem-cell {
    height: 4.5em;
    width: 4.5em;
  }
  #play {
      height: 3rem;
  }
</style>

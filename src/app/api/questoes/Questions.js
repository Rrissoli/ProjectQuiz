

export default class Quiz {
    constructor(questoes) {
      this.questoes = questoes;
      this.pontuacaoTotal = 0;
      this.questaoAtual = 0;
    }
  
    iniciarQuiz() {
      this.questaoAtual = 0;
      this.pontuacaoTotal = 0;
      
    }
  }
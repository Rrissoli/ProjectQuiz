import Image from 'next/image'
import '../../app/globals.css'
import styles from './styles.module.css'
import Quiz from '../../app/api/questoes/Questions';
import { useEffect, useState } from 'react';

export default function QuestionPage() {

    const [questoes, setQuestoes] = useState([]);

    useEffect(() => {
        const fetchQuestoes = async () => {
            const res = await fetch('/api/data/questoes.json');
            const data = await res.json();
            setQuestoes(data);
            console.log(questoes)
        };

        fetchQuestoes();
    }, []);

    const quiz = new Quiz(questoes);

    quiz.iniciarQuiz(); 
    return (
        <div className={styles.main_question}>
            <div className={styles.page}>
                <button className={styles.button_back}> <Image src="/assets/stinha.svg" width={30} height={30}></Image>Voltar</button>
                <div className={styles.pergunta_div}><h1 className={styles.pergunta}>1. Sou uma pessoa bem organizada na vida pessoal e profissional e sigo minha agenda sempre!</h1></div>
                <div className={styles.respostas_div}>

                </div>
            </div>
        </div>
    )
}

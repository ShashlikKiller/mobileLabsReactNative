import PageTemplate from "./components";

export default function WolfScreen({navigation}: {navigation: any}) {
    const runAway = () => {
      navigation.navigate('BearScreen')
    }
    const stayHere = () => {
      navigation.navigate('FinalBadScreen')
    }

    return (
        <PageTemplate
        title="Катится колобок дальше, а навстречу ему волк. Волк и говорит: «Колобок,
        колобок, я тебя съем!». Но колобок ответил «Не ешь меня, я тебе песенку спою», и
        спел песенку о том, как его испекла старуха и как он убежал от бабушки и дедушки, и
        от зайца тоже."
        imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TxEnwaaU5UGbtRasarYKKQWzPbfS5t5pk2M3HKT6Jw&s"
        button1Text="Остаться"
        button2Text="Убежать"
        button1Action={stayHere}
        button2Action={runAway}
      />
    );
}
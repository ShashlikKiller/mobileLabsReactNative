import PageTemplate from "./components";

export default function FoxScreen({navigation}: {navigation: any}) {
     const runAway = () => {
       navigation.navigate('FinalGoodScreen')
     }
     const stayHere = () => {
       navigation.navigate('FinalBadScreen')
     }

    return (
        <PageTemplate
        title="Катится колобок дальше, а навстречу ему лиса. Лиса и говорит: «Колобок,
        колобок, я тебя съем!». Но колобок ответил «Не ешь меня, я тебе песенку спою», и
        спел песенку о том, как его испекла старуха и как он убежал от бабушки и дедушки, и
        от зайца, волка и медведя тоже. А лиса говорит: «Хороша песенка, но глуховата я,
        сядь мне на язычок, и спой ещё разок!»"
        imageUri="https://assetsio.gnwcdn.com/minecraft%20how%20to%20tame%20fox.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        button1Text="Послушаться"
        button2Text="Убежать"
        button1Action={stayHere}
        button2Action={runAway}
      />
    );
}
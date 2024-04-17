import PageTemplate from "./components";

export default function HareScreen({navigation}: {navigation: any}) {
    const runAway = () => {
      navigation.navigate('WolfScreen')
    }
    const stayHere = () => {
      navigation.navigate('FinalBadScreen')
    }

    return (
        <PageTemplate
        title=": Надоело колобку лежать, он спрыгнул с окошка и покатился в лес. Встретил его
        в лесу заяц и сказал: «Колобок, колобок, я тебя съем!». Но колобок ответил «Не ешь
        меня, я тебе песенку спою», и спел песенку о том, как его испекла старуха и как он
        убежал от бабушки и дедушки."
        imageUri="https://i0.wp.com/www.godwhospeaks.uk/wp-content/uploads/2021/10/HareMainPic.jpg?resize=1140%2C641&ssl=1"
        button1Text="Остаться"
        button2Text="Убежать"
        button1Action={stayHere}
        button2Action={runAway}
      />
    );
}
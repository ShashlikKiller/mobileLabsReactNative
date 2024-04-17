import PageTemplate from "./components";

export default function BearScreen({navigation}: {navigation: any}) {
     const runAway = () => {
       navigation.navigate('FoxScreen')
     }
     const stayHere = () => {
       navigation.navigate('FinalBadScreen')
     }

    return (
        <PageTemplate
        title="Катится колобок дальше, а навстречу ему медведь. Медведь и говорит:
        «Колобок, колобок, я тебя съем!». Но колобок ответил «Не ешь меня, я тебе песенку
        спою», и спел песенку о том, как его испекла старуха и как он убежал от бабушки и
        дедушки, и от зайца с волком тоже."
        imageUri="https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/8207a87a772e42748b9ead01e18d3f16~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1713438000&x-signature=dYD3NgBBQBQEXHh4b4M0Npytn8U%3D"
        button1Text="Остаться"
        button2Text="Убежать"
        button1Action={stayHere}
        button2Action={runAway}
      />
    );
}
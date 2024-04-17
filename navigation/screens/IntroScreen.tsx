import PageTemplate from "./components";

export default function IntroScreen({navigation}: {navigation: any}) {
    const stayHere = () => {
      navigation.navigate('FinalBadScreen')
    }
    const runAway = () => {
      navigation.navigate('HareScreen')
    }

    return (
        <PageTemplate
        title="Жили-были старик со старухой. Однажды старик попросил старуху испечь ему
        колобок. Старуха по коробу поскребла, по сусеку помела, замесила тесто, испекла
        колобок и положила она его на окошко остывать."
        imageUri="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.lw.lk/wp-content/uploads/2019/10/senior-2.jpg"
        button1Text="Остаться"
        button2Text="Убежать"
        button1Action={stayHere}
        button2Action={runAway}
      />
    );
}
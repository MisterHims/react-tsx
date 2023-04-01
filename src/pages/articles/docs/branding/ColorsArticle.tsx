import PrimaryColorsIMG from "../../../../assets/images/react-colors/primary-colors.png"
import TonicColorsIMG from "../../../../assets/images/react-colors/tonic-colors.png";
import ComplementaryColors from "../../../../assets/images/react-colors/complementary-colors.png"
import TonedColorsPhotoshop from "../../../../assets/images/react-colors/toned-colors-making.jpg"
import ComplementaryChoice from "../../../../assets/images/react-colors/complementary-choice-colors.png"

const ColorsArticle = () => {
  return (
    <div className='content'>
        <h1>Choix des couleurs</h1>
        <p>Le choix des couleurs sélectionnées et leurs utilisations à travers notre projet React peut-être défini
            de plusieurs façons. Celle-ci est, à mon gout, bien la plus rapide et la plus efficace.
        </p>
        <p>
            Dans un premier temps, il est important d'avoir en tête une couleur principale que l'on souhaite utilisée
            le plus régulièrement dans notre projet. Pour notre cas, le bleu clair a été sélectionné et le fond sombre
            ci-dessous tends légèrement vers cette teinte :
        </p>
        <img src={PrimaryColorsIMG} />
        <p>
            Il est ensuite très utile de créer plusieurs niveaux de cette couleur, en jouant par exemple avec le mode de couleur Lab de Photoshop qui repose sur la perception de la couleur par l’œil humain.
            De cette façon, il est bien plus facile de créer un aspect de luminosité plus pertinent.
            Nous avons ainsi dérivé plusieurs niveaux de couleurs compris entre notre thème clair et sombre par unités de 10.
        </p>
        <img src={TonedColorsPhotoshop} />
        <p>
            La couleur bleue en question est considérée comme étant une tonique, c'est à dire une couleur qui sera très régulièrement utilisée et reconnaissable afin d'attirer le regard de l'utilisateur.
            Elle peut-être utilisée par exemple pour des Call-to-Action tels que des boutons.
        </p>
        <img src={TonicColorsIMG} />
        <p>
            Cette couleur peut également être utilisée d'autres façons, comme par exemple  en jouant avec son opacité sur un fond de couleur clair ou sombre (voir ci-dessus).
        </p>
        <p>
            Une autre couleur très importante à utiliser est la couleur complémentaire. Elle se trouve être généralement une couleur drastiquement opposée à notre tonique (le bleu clair défini plus au dessus) :
        </p>
        <img src={ComplementaryChoice} />
        <p>
            Voici donc la couleur complémentaire que nous avons ainsi trouvée :
        </p>
        <img src={ComplementaryColors} />
        <p>
            Cette couleur complémentaire pourra être utilisée à travers certains éléments faisant partie de notre branding mais n'ayant pas forcément d'appel à l'action pour l'utilisateur.
            Il n'est ainsi pas d'usage de l'utiliser pour des boutons par exemple.
        </p>
    </div>
  )
}

export default ColorsArticle
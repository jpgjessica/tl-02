import imgP1 from "../img/produits/produits-section-vedette-home.png"
import imgP2 from "../img/produits/produits-section-vedette-home02.png"
import imgP3 from "../img/produits/produits-section-vedette-home03.png"
import imgP4 from "../img/produits/produits-section-vedette-home04.png"
import imgP5 from "../img/produits/produits-section-vedette-home05.png"
import imgP6 from "../img/produits/produits-section-vedette-home06.png"
import imgP7 from "../img/produits/produits-section-vedette-home07.png"
import imgP8 from "../img/produits/produits-section-vedette-home08.png"
import imgP9 from "../img/produits/produits-section-vedette-home09.png"

/**
 * Classe représentant un produit.
 */
class product {
    /**
 * Crée une instance de Product.
 * @param {string} imgProduct - L'image du produit.
 * @param {string} title - Le titre du produit.
 * @param {number} price - Le prix du produit.
 * @param {string} description - La description courte du produit.
 * @param {boolean} isBestSellerProduct - Indique si le produit est un best-seller.
 * @param {string} longueDescription - La description longue du produit.
 */
    constructor(imgProduct, title, price, description, isBestSellerProduct, longueDescription) {
        this.imgProduct = imgProduct;
        this.title = title;
        this.price = price;
        this.description = description;
        this.isBestSellerProduct = isBestSellerProduct;
        this.longueDescription = longueDescription;
    }

    /**
     * Génère le HTML pour un produit best-seller.
     * @returns {HTMLElement} - L'élément HTML représentant le produit best-seller.
     */

    toBestsellerHtml() {
        const cardBestseller = document.createElement('div');
        const img = document.createElement('img');
        const cardContent = document.createElement('div');
        const cardPrice = document.createElement("span");
        const cardTitle = document.createElement("span");
        const btnBuy = document.createElement("button");

        cardBestseller.className = 'card-product flex flex-col bg-summer-ligth shadow-lg p-5 cursor-pointer justify-center items-center'
        cardContent.className = 'card-content flex flex-col justify-center items-center gap-2';
        img.className = 'card-img w-full';
        img.src = this.imgProduct;
        cardTitle.className = "card-title uppercase font-bold text-xs";
        cardTitle.textContent = this.title;
        cardPrice.className = 'card-price text-base	font-bold text-summer-primary';
        cardPrice.textContent = this.price + ' CA';
        btnBuy.className = 'btn-buy text-xs text-white bg-black p-3 px-auto rounded-md'
        btnBuy.textContent = 'Ajouter au panier';

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardPrice);
        cardContent.appendChild(btnBuy);

        cardBestseller.appendChild(img);
        cardBestseller.appendChild(cardContent);

        return cardBestseller;
    }

    /**
     * Génère le HTML pour un produit.
     * @returns {HTMLElement} - L'élément HTML représentant le produit.
     */

    toProductHtml() {
        const cardProduct = document.createElement('div');
        const img = document.createElement('img');
        const cardContent = document.createElement('div');
        const cardPrice = document.createElement("span");
        const cardTitle = document.createElement("span");
        const cardDescription = document.createElement("span");

        cardProduct.className = 'card-product flex flex-col bg-summer-ligth shadow-lg p-5 cursor-pointer justify-center items-center';
        cardContent.className = 'card-content flex flex-col justify-center items-center gap-2';
        img.className = 'card-img w-full';
        img.src = this.imgProduct;
        cardTitle.className = "card-title uppercase font-bold text-xs";
        cardTitle.textContent = this.title;
        cardDescription.className = "card-desc text-xs";
        cardDescription.textContent = this.description;
        cardPrice.className = 'card-price text-base	font-bold text-summer-primary';
        cardPrice.textContent = this.price + ' CA';
        cardProduct.setAttribute('data-search', this.title);

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardPrice);
        cardContent.appendChild(cardDescription);

        cardProduct.appendChild(img);
        cardProduct.appendChild(cardContent);

        return cardProduct;
    }

    /**
     * Génère le HTML pour une modale de produit.
     * @returns {HTMLElement} - L'élément HTML représentant la modale de produit.
     */

    toModalHtml() {
        const modale = document.createElement('div');
        const modaleImg = document.createElement('img');
        const modaleContent = document.createElement('div');
        const modaleTitle = document.createElement('h3');
        const modaleLongueDescription = document.createElement('span');
        const modalePrice = document.createElement("span");
        const btnClose = document.createElement('button');
        const btnBuy = document.createElement('button');

        modale.className = 'modale p-6 flex flex-col bg-white relative w-full max-w-md h-full md:h-auto items-center';
        modaleImg.className = 'modale-img w-[20rem]';
        modaleImg.src = this.imgProduct;
        modaleContent.className = 'modale-content flex flex-col justify-center items-center gap-2';
        modaleTitle.className = 'modale-title uppercase font-bold text-xs';
        modaleTitle.textContent = this.title;
        modaleLongueDescription.className = 'modale-description  text-xs';
        modaleLongueDescription.textContent = this.longueDescription;
        modalePrice.className = 'modale-price text-base	font-bold text-summer-primary';
        modalePrice.textContent = this.price + ' CA';
        btnBuy.className = 'btn-buy-modal text-xs text-white bg-black p-3 px-auto rounded-md';
        btnBuy.textContent = 'Ajouter au panier';
        btnClose.className = 'btn-close btn-close material-symbols-outlined absolute top-0 right-0 mt-2 mr-2';
        btnClose.textContent = 'close';

        modaleContent.appendChild(btnClose);
        modaleContent.appendChild(modaleTitle);
        modaleContent.appendChild(modaleLongueDescription);
        modaleContent.appendChild(modalePrice);
        modaleContent.appendChild(btnBuy);

        modale.appendChild(modaleImg);
        modale.appendChild(modaleContent);

        return modale;
    }
}

/**
 * Fonction pour obtenir la liste des produits.
 * @returns {Product[]} - Tableau d'instances de Product.
 */

function getProducts() {
    const products = [
        new product(
            imgP1,
            "Rolling Stones Flowers Blue",
            129.99,
            "Lunettes de soleil inspiré de la pochette de l'album emblématique Flowers du groupe Rolling Stones.",
            true,
            "Rolling Stones Pour tous les Stonesheads, le vrai Stoned est arrivé ! Avec beaucoup d'hédonisme dans le style exécutif, ces lunettes de soleil pour femme Rolling Stones Executive Red sont fabriquées en acier inoxydable, un matériau léger et résistant. Les lentilles offrent une protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. les « roches » et les découpes métalliques sont des détails des tiges. La liberté et le style rock'n'roll s'expriment dans le piercing de la lentille. Les géants du rock sortent un single à succès sur Sol, racontant dans nos modèles l'histoire du célèbre groupe Rolling Stones et de leurs moments marquants pour la musique. La collection présente toutes les phases du groupe, pour profiter d'une fête sauvage avec style."
        ),
        new product(
            imgP2,
            "New tech degrade matte",
            89.99,
            "Nous apportons l'attribut feuilles de metal aux lunettes de soleil, combinant le look technologique.",
            true,
            "Nous avons ajouté l'attribut Sheet Metal aux lunettes de soleil et aux montures de prescription, combinant le look technologique. Tout cela avec la puissance et l'élégance de la tôle dans des designs épicés! Lunettes de soleil New Tech Gatinho Metal Brown pour femme, en acier inoxydable léger et résistant. Forme de chat avec une touche carrée ! Fine plaque métallique sur les branches, rendant le modèle élégant, et le logo Sol en guise d'autocollant métallique. Verres avec protection 100 % UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. Pont en forme de U avec support nasal en silicone facile à régler."
        ),
        new product(
            imgP3,
            "Bamboo classique",
            159.99,
            "Les lunettes de soleil classiques en bambou présentent des détails incroyables dans l'art de la fusion naturelle.",
            true,
            "Les lunettes de soleil polarisées noires classiques en bambou Sol pour hommes présentent des détails incroyables dans une fusion artistique naturelle. Les finitions ont été améliorées et nous avons inclus de nombreux éléments indigènes trouvés dans le bois et le bambou. Verres avec protection 100 % UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. De plus, ils sont polarisés, ce qui rend l'image plus nette et, en même temps, augmente le confort visuel. Pont en forme de « U » avec support nasal intégré et branches avec finition en bambou et signature Sol."
        ),
        new product(
            imgP4,
            "New Tech carré onix",
            159.99,
            "Nous apportons l'attribut feuilles de metal aux lunettes de soleil, combinant le look technologique.",
            true,
            "Nous apportons l'attribut Sheet Metal aux lunettes de soleil et aux montures de prescription, en combinant le look technologique. Tout cela avec la puissance et l'élégance de la tôle dans des designs épicés! Regardez cette tige !!! La plaque métallique des lunettes de soleil New Tech Square Black Onyx pour hommes chevauche le moulage par injection. Incroyable, non ?! Verres avec protection 100 % UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. Pont en forme de U avec support nasal en silicone facile à régler."
        ),
        new product(
            imgP5,
            "Round MT slim",
            134.99,
            "Un design intemporel pour tous les goûts.",
            false,
            "Si la proposition est d'allier style et praticité, les lunettes de soleil unisexes Sol Aviator Faceted Black Polarized sont idéales. Fabriqué en acier inoxydable avec une finition légèrement facettée. Verres avec protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil. De plus, les verres sont polarisés, empêchant la lumière du soleil réfléchie par les surfaces planes d'affecter votre vision. Double pont avec support de nez en silicone facile à régler et branches avec détails texturés et signature Sol. Avec les piliers de la mode, de la musique, de l'art et du geek, la marque Sol propose des lunettes de soleil, des montures de lunettes de vue et des montres, au design intemporel pour plaire à tous les goûts. Idéal pour ceux qui apprécient la praticité et les pièces uniques, mais avec cette touche épicée, vous êtes toujours à la mode."
        ),
        new product(
            imgP6,
            "Michael Jackson round noir",
            99.99,
            "Nouvelle collection inspirée par des noms comme le roi de la pop, Michael Jackson.",
            false,
            "Ce modèle est inspiré de la veste portée par Michael Jackson dans la vidéo Thriller. Le détail métallique sur la tige s'inspire de l'épaulette de cette veste. Lunettes de soleil Michael Jackson Square Casual Black pour hommes en acier inoxydable, un matériau léger et résistant. Les lentilles offrent une protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. Bienvenue dans l'univers des looks iconiques et stylés de MJ, transformés en accessoires exclusifs qui captent toute son énergie, son audace et son originalité. Chaque pièce est une célébration de l'héritage de la star, apportant des éléments de ses vestes emblématiques, des éclats incomparables et des détails qui ont marqué l'histoire. L'inoubliable moonwalk, le gant brillant et les costumes Thriller. L'enthousiasme de Billie Jean et la révolution de la mode que MJ a apporté au monde !"
        ),
        new product(
            imgP7,
            "Michael Jackson round rosé",
            89.99,
            "Nouvelle collection inspirée par des noms comme le roi de la pop, Michael Jackson.",
            false,
            "Ce modèle est inspiré de la veste portée par Michael Jackson dans la vidéo Thriller. Le détail métallique sur la tige s'inspire de l'épaulette de cette veste. Lunettes de soleil Michael Jackson Square Casual Black pour hommes en acier inoxydable, un matériau léger et résistant. Les lentilles offrent une protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. Bienvenue dans l'univers des looks iconiques et stylés de MJ, transformés en accessoires exclusifs qui captent toute son énergie, son audace et son originalité. Chaque pièce est une célébration de l'héritage de la star, apportant des éléments de ses vestes emblématiques, des éclats incomparables et des détails qui ont marqué l'histoire. L'inoubliable moonwalk, le gant brillant et les costumes Thriller. L'enthousiasme de Billie Jean et la révolution de la mode que MJ a apporté au monde !"
        ),
        new product(
            imgP8,
            "Hits classique bourgogne",
            129.99,
            "Ces lunettes de soleil unisexes classiques sont fabriquées en acier inoxydable, un matériau léger et résistant.",
            false,
            "La collection la plus attendue de l'année est arrivée ! Succès au piment. Un classique super fashionista ! Ces lunettes de soleil unisexes Chilli Hits Classic Purple sont fabriquées en acier inoxydable, un matériau léger et résistant. Les lentilles offrent une protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil et réduisant ainsi le risque de développer des maladies oculaires. Support de nez en silicone et branches texturées avec signature Sol et pointe avec inscription Chilli Hits."
        ),
        new product(
            imgP9,
            "Round MT rosé",
            149.99,
            "Lunettes de soleil unisexes Round MT Brown Casual, en acier inoxydable de haute qualité",
            false,
            "Les lunettes de soleil pour femmes Sol Hexagonal Rosé gagnent de plus en plus d'importance dans les looks. Fabriqué en acier inoxydable, un matériau léger et résistant. Les lentilles offrent une protection à 100 % contre les rayons UVA et UVB, protégeant vos yeux des rayons nocifs du soleil, réduisant ainsi le risque de développer des maladies oculaires. Support de nez et branches en silicone avec inscription Sol."
        )
    ]
    return products;
}

export default getProducts;
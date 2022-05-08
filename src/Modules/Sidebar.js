export default function Sidebar() {

    const sugestions = [
        {
            name: "bad.vibes.memes",
            image: "assets/img/bad.vibes.memes.svg",
            reason: "Segue você"
        },
        {
            name: "chibirdart",
            image: "assets/img/chibirdart.svg",
            reason: "Segue você"
        },
        {
            name: "razoesparaacreditar",
            image: "assets/img/razoesparaacreditar.svg",
            reason: "Novo no Instagram"
        },
        {
            name: "adorable_animals",
            image: "assets/img/adorable_animals.svg",
            reason: "Segue você"
        },
        {
            name: "smallcutecats",
            image: "assets/img/smallcutecats.svg",
            reason: "Segue você"
        }
    ]

    return (
        <div class="sidebar">

            <User name="catanacomics" image="assets/img/catanacomics.svg" nickname="Catana" />
            
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestions.map(item => <Sugestion name={item.name} image={item.image} reason={item.reason} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
    </div>
    );
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.name}</strong>
                  {props.nickname}
            </div>
        </div>
    );
}

function Sugestion(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                <div class="nome">{props.name}</div>
                <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
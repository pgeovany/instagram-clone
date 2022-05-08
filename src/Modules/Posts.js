export default function Posts() {

    const posts = [
        {
            name:"meowed",
            title: "assets/img/meowed.svg",
            image: "assets/img/gato-telefone.svg",
            like: "Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>",
            likeImage: "assets/img/respondeai.svg"
        },
        {
            name:"barked",
            title: "assets/img/barked.svg",
            image: "assets/img/dog.svg",
            like: "Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>",
            likeImage: "assets/img/adorable_animals.svg"
        }
    ]

    return (
        <div class="posts">
            {posts.map(item => <Post name={item.name} title={item.title} image={item.image} 
            like={item.like} likeImage={item.likeImage} />)}
    </div>
    );
}

function Post(props) {
    return(
        <div class="post">
        <div class="topo">
            <div class="usuario">
            <img src={props.title} />
            {props.name}
            </div>
            <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img src={props.image} />
        </div>

        <div class="fundo">
            <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div class="curtidas">
            <img src={props.likeImage} />
            <div class="texto">
                {props.like}
            </div>
            </div>
        </div>
    </div>
    );
} 
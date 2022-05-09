import React from "react";

export default function Posts() {

    const posts = [
        {
            name:"meowed",
            title: "assets/img/meowed.svg",
            image: "assets/img/gato-telefone.svg",
            like: "respondeai",
            numberOfLikes: "101.523",
            likeImage: "assets/img/respondeai.svg"
        },
        {
            name:"barked",
            title: "assets/img/barked.svg",
            image: "assets/img/dog.svg",
            like: "adorable_animals",
            numberOfLikes: "99.159",
            likeImage: "assets/img/adorable_animals.svg"
        }
    ]

    return (
        <div className="posts">
            {posts.map(item => <Post name={item.name} title={item.title} image={item.image} 
            like={item.like} numberOfLikes={item.numberOfLikes} likeImage={item.likeImage} />)}
    </div>
    );
}

function Post(props) {

    const [heartClass, setHeartClass] = React.useState("");
    const [heartIcon, setHeartIcon] = React.useState("heart-outline");

    function like() {
        setHeartIcon("heart");
        setHeartClass("liked");
    }

    function dislike() {
        if(heartClass === "liked") {
            setHeartIcon("heart-outline");
            setHeartClass("");
        } else {
            setHeartIcon("heart");
            setHeartClass("liked");
        }
    }

    return(
        <div className="post">
        <div className="topo">
            <div className="usuario">
            <img src={props.title} />
            {props.name}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div className="conteudo">
            <img onClick={like} src={props.image} />
        </div>

        <div className="fundo">
            <div className="acoes">
            <div>
                <ion-icon onClick={dislike} className={heartClass} name={heartIcon}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            </div>

            <div className="curtidas">
            <img src={props.likeImage} />
            <div className="texto">
                Curtido por <strong>{props.like}</strong> e <strong>outras {props.numberOfLikes} pessoas</strong>
            </div>
            </div>
        </div>
    </div>
    );
}
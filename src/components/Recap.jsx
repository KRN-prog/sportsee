function Recap( data ) {
    console.log(data.color)
    return (
        <article className="rightSideInfo">
            <div class={`rightSideInfo__img ${data.color}`}>
                <img src={data.img} alt={data.altImg} />
            </div>
            <div>
                <span className="uniteMesure">{data.value}{data.uniteMesure}</span>
                <span className="categorie">{data.categorie}</span>
            </div>
        </article>
    )
}

export default Recap
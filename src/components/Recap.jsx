function Recap( data ) {
    return (
        <article className="rightSideInfo">
            <div className={`rightSideInfo__img ${data.color}`}>
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
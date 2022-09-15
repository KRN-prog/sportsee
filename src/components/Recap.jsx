function Recap( data ) {
    console.log(data)
    return (
        <article className="rightSideInfo">
            <div>
                <img src={data.img} alt={data.altImg} />
            </div>
            <div>
                <span>{data.value}{data.uniteMesure}</span>
                <span>{data.categorie}</span>
            </div>
        </article>
    )
}

export default Recap
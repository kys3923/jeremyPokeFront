const PokeCard = (data) => {

  console.log(data);

  const weightCal = (weight) => {
    let calculatedWeight = weight / 10
    return `${calculatedWeight}`
  }

  return (
    <div className="rounded-lg bg-white mx-12 my-6 p-8 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img src={data.data.sprites.front_default} />
        <p className="font-bold">{data.data.name.toUpperCase()}</p>
      </div>
      <div>
        <p>Pokemon ID:</p>
        <p>{data.data.id}</p>
      </div>
      <div>
        <p>Pokemon Weight:</p>
        <p>{weightCal(data.data.weight)}kg</p>
      </div>
      {data.data.abilities.length > 0 ?
        <div>
          <p>Abilities:</p>
          <ul>
            {data.data.abilities.map((ability) => {
              return <li>{ability.ability.name}</li>
            })}
          </ul>
        </div>
        :
        null
      }
    </div>
  );
}
export default PokeCard;
const PokeCard = (data) => {

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
      <div className='rounded-md border-2 border-gray-600 p-4 w-9/12'>
        <div className='flex flex-row jutify-center w-full border-b-2 border-gray-700'>
          <p className='w-1/2 p-2 font-bold'>Pokemon ID:</p>
          <p className='w-1/2 p-2'>{data.data.id}</p>
        </div>
        <div className='flex flex-row jutify-center w-full border-b-2 border-gray-700'>
          <p className='w-1/2 p-2 font-bold'>Pokemon Weight:</p>
          <p className='w-1/2 p-2'>{weightCal(data.data.weight)}kg</p>
        </div>
        {data.data.abilities.length > 0 ?
          <div className='flex flex-row jutify-center w-full border-b-2 border-gray-700'>
            <div className='w-1/2 p-2'>
              <p className='font-bold'>Abilities:</p>
            </div>
            <ul className='inline-block w-1/2 p-2'>
              {data.data.abilities.map((ability) => {
                return <li key={ability.ability.name}>*{ability.ability.name}</li>
              })}
            </ul>
          </div>
          :
          null
        }

      </div>
    </div>
  );
}
export default PokeCard;
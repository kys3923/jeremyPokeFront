const PokeLanding = (props) => {
  return (
    <>
      <p className="text-2xl">Landing for Poke</p>
      <nav>
        <ul>
          <li><a href='/poke/search' className="hover:text-red-800">Search Pokemon</a></li>
        </ul>
      </nav>
    </>
  );
}
export default PokeLanding;
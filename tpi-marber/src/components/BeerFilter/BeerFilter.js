import "./BeerFilter.css";

const BeerFilter = ({ onFilterStyleChange, filterStyle }) => {
  const changeStyleHandler = (event) => {
    onFilterStyleChange(event.target.value);
  };

  return (
    <>
      <div className="Beer-filter">
        <div className="Beer-filter__control">
          <select onChange={changeStyleHandler} value={filterStyle}>
            <option value="">Seleccione un estilo</option>
            <option value="ipa">IPA</option>
            <option value="red">ROJA</option>
            <option value="blonde">RUBIA</option>
            <option value="black">NEGRA</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default BeerFilter;

const Loader = () => {
  return (
    <>
      {[...Array(30)].map((x, i) =>
        <div className="loader-box" key={i}>
          <div className="loader-box__number" />
          <div className="loader-box__display">
            <div className="loader-box__title" />
            <div className="loader-box__tags" />
          </div>
        </div>
      )}
    </>
  )
}

export default Loader;

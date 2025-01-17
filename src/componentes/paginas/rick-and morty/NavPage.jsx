 const NavPage = (props) => {
    return (
      <header className="d-flex justify-content-between inicio align-items-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            if (props.page === 1) return null;
            props.setPage(props.page - 1);
          }}
        >
          &larr; Anterior
        </button>
        <p>Page: {props.page}</p>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Siguiente &rarr;
          {/* Page {props.page + 1} */}
        </button>
      </header>
    );
  }
  
  export default NavPage;
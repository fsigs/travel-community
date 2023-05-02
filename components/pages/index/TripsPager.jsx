export default function TripsPager(props){
  const limit = props.limit
  const thisPage = props.page
  const totalCount = props.totalCount
  const pageCount = parseInt(Math.ceil(props.totalCount / props.limit))
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return(
    <>
    <nav className="mt-4" aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
      {pages.map(page => {
        if (page == thisPage) {
          return <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
        } else {
          return <li className="page-item"><a className="page-link" href="#">{page}</a></li>
        }
      })}
      </ul>
    </nav>
    </>
  )
}
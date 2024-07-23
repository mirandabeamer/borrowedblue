import './App.css';
import Background from './bookwall.jpg'

function Jumbotron() {
  return (
<header>
  <div class="p-5 text-center bg-image" style={{ backgroundImage: `url('${Background}')` }} >
    <div class="mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3 brandname">Borrowed & Blue</h1>
          <h4 class="mb-3"><i>Share the books that bind us!</i></h4>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" href="#!" role="button">View Libraries</a>
        </div>
      </div>
    </div>
  </div>
</header>
  );
}

export default Jumbotron;

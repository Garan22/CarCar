function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
        <div className="row">
          <div className="col">
            <img src="https://media.evo.co.uk/image/private/s--etPdYYwg--/v1556226280/evo/images/dir_1112/car_photo_556282.jpg" alt="" width="500px"/>
          </div>
          <div className="col">
          <img src="https://cdn.carbuzz.com/gallery-images/2020-mclaren-senna-rear-view-driving-carbuzz-435414-1600.jpg" alt="" width="500px"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

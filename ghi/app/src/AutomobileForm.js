import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      year: '',
      vin: '',
      model: '',
      models: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeVin = this.handleChangeVin.bind(this);
    this.handleChangeModel = this.handleChangeModel.bind(this);
  }


  async componentDidMount() {
    const url = `http://localhost:8100/api/models`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ models: data.models });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {...this.state};


    const autoUrl = 'http://localhost:8100/api/automobiles/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(autoUrl, fetchConfig);
    if (response.ok) {
      const newAuto = await response.json();
      console.log(newAuto);

      const cleared = {
        color: '',
        year: '',
        vin: '',
        model: '',
      };

      this.setState(cleared)

    }
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangeYear(event) {
    const value = event.target.value;
    this.setState({ year: value });
  }

  handleChangeVin(event) {
    const value = event.target.value;
    this.setState({ vin: value });
  }

  handleChangeModel(event) {
    const value = event.target.value;
    this.setState({ model: value });
  }



  render() {
    return (
        <>


      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new Automobile</h1>
            <form onSubmit={this.handleSubmit} id="create-auto-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeColor} value={this.state.color} placeholder="color" required type="text" name="color" id="color" className="form-control" />
                <label htmlFor="fabric">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeYear} value={this.state.year} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                <label htmlFor="style">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeVin} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" className="form-control" />
                <label htmlFor="color">Vin</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeModel} value={this.state.model} required name="model" id="model" className="form-select">
                  <option value="">Choose a Model</option>
                  {this.state.models.map(model => {
                    return (
                      <option key={model.id} value={model.id}>{model.name}</option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
            <br></br>
            <a href="/automobiles">
                <button className="btn btn-outline-danger">Back to Automobile list</button>
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default AutomobileForm;

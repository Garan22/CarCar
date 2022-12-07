import React from 'react'

class VehicleModelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            picture_url: '',
            manufacturer: '',
            manufacturers: [],
        }
        // this.handleIdChange = this.handleIdChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePicture_UrlChange = this.handlePicture_UrlChange.bind(this)
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount(){
        const url = 'http://localhost:8100/api/manufacturers/'

        const response = await fetch(url)

        if(response.ok) {
            const data = await response.json()
            this.setState({ manufacturers: data.manufacturers })
        }
    }

    async handleSubmit(event) {
        event.preventDefault()
        const data = {...this.state}
        delete data.manufacturers

        const modelUrl = 'http://localhost:8100/api/models/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }

        const response = await fetch(modelUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()
            console.log(newModel)

            const cleared = {
                id: '',
                name: '',
                picture_url: '',
                manufacturer: '',
            }
            this.setState(cleared)
        }

    }

    // handleIdChange(event) {
    //     const value = event.target.value
    //     this.setState({id: value})
    // }
    handleNameChange(event) {
        const value = event.target.value
        this.setState({name: value})
    }
    handlePicture_UrlChange(event) {
        const value = event.target.value
        this.setState({picture_url: value})
    }
    handleManufacturerChange(event) {
        const value = event.target.value
        this.setState({manufacturer: value})
    }
    render(){
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a new Vehicle Model</h1>
                <form onSubmit={this.handleSubmit} id="create-Vehicle-Model-form">

                  <div className="form-floating mb-3">
                    <input value={this.state.model_name} onChange={this.handleNameChange} placeholder="Name" required type="text" name="Name" id="Name" className="form-control" />
                    <label htmlFor="Name">Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input value={this.state.picture_url} onChange={this.handlePicture_UrlChange} placeholder="picture_url" type="url" name="picture_url" id="picture_url" className="form-control" />
                    <label htmlFor="picture url">picture Url (optional)</label>
                  </div>

                  <div className="mb-3">
                    <select value={this.state.manufacturer} onChange={this.handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {this.state.manufacturers.map(manufacturer => {
                        return (
                        <option key={manufacturer.href} value={manufacturer.href}>{manufacturer.name}</option>
                    );
                  })}
                    </select>
                    </div>

                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
    export default VehicleModelForm

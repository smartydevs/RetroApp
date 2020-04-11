import React, { Component } from 'react'
import { CreateEventComponent } from '.'

class CreateEventContainer extends Component {
  state = {
    photoExisting: false
  }

  onAddPhoto = () => {}

  render() {
    const { photoExisting } = this.state

    return (
      <CreateEventComponent
        onAddPhoto={this.onAddPhoto}
        photoExisting={photoExisting}
      />
    )
  }
}

export default CreateEventContainer

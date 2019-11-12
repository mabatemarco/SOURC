import React from 'react';
import { getProject } from '../services/api-helper.js';


export default class Project extends React.Component {
  state = {
    currentProject: null
  }

  componentDidMount = () => {
    this.currentProject()
  }

  currentProject = async () => {
    const currentProject = await getProject(this.props.id)
    this.setState({
      currentProject
    })
  }

  render() {
    return (
      <></>
    )
  }
}
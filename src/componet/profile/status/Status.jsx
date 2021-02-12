import React from "react";
import styleCss from "./StatusStyle.module.css"

class Status extends React.Component {

  state = {
    editMode: true,
    statusText: this.props.statusText,
    currentAutoFocuse: false,
  }

  editStatus = () => {
    if (this.props.userId === this.props.user.userId) {
      this.setState({
        editMode: false,
        currentAutoFocuse: true
      })
    }
  }

  putStatus = () => {
    this.setState({
      editMode: true
    })
    this.props.updateStatus(this.state.statusText);
  }

  onStatusCeange = (element) => {
    let text = element.currentTarget.value;
    this.setState({
      statusText: text
    });

  }

  componentDidUpdate(prevProps,prevState){
    if(this.props.statusText !== prevProps.statusText){
      this.setState({
        statusText: this.props.statusText
      })
    }
  }
  render() {

    return (
      <div className={styleCss.header}>
        {this.state.editMode &&
          <div>
            <span onDoubleClick={this.editStatus}>{this.props.statusText === "" ? "please add status" : this.props.statusText}</span>
          </div>
        }
        {!this.state.editMode &&
          <div>
            <input autoFocus={this.state.currentAutoFocuse} type="text" onBlur={this.putStatus} onChange={this.onStatusCeange} value={this.state.statusText} />
          </div>
        }
      </div>
    )
  }
}

export default Status;
import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.onOpen = this.onOpen.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.state = {
      selected: null,
      opened: false
    };
  }

  onOpen() {
    this.setState({
      opened: !this.state.opened
    });
  }

  onSelect(option) {
    this.setState(
      {
        selected: option,
        opened: false
      }
    );
  }

  getOptions() {
    return this.props.options.map(o => (
      <Option key={o.key} option={o} onSelect={this.onSelect} />
    ));
  }

  render() {
    const items = this.getOptions();
    const { opened, selected } = this.state;
    const selectedValue = selected ? this.state.selected.value : "Select";

    return (
      <div className="select-wrapper">
        <div className="select" onClick={this.onOpen}>
          <span>{selectedValue}</span>
        </div>
        {opened && (
          <div className="ul-wrapper">
            <ul>{items}</ul>
          </div>
        )}
      </div>
    );
  }
}

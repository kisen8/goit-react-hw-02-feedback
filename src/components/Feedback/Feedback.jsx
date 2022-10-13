import React from 'react';

class Feedback extends React.Component {
  render() {
    const buttons = [
      { name: 'good', id: 1 },
      { name: 'neutral', id: 2 },
      { name: 'bad', id: 3 },
    ];
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {buttons.map(item => (
            <button
              onClick={() => this.props.onClick(item.name, 1)}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Feedback;

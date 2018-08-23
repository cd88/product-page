class SpinningRectangles extends React.Component {
  render() {
    return (
      <div className="circle">
        <div className="rectangle linear" />
        <div className="rectangle lag1" />
        <div className="rectangle lag2" />
        <div className="rectangle lag3" />
      </div>
    );
  }
}

export default SpinningRectangles

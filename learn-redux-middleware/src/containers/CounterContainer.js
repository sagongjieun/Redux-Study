import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { incraseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, incraseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={incraseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  { incraseAsync, decreaseAsync }
)(CounterContainer);

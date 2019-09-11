- 用户在表单填入的内容，属于用户跟组件的互动，所以不能用 this.props

```
var Input = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>{value}</p>
      </div>
    );
  }
});

ReactDOM.render(<Input/>, document.body);
```

> 上面代码中，文本输入框的值，不能用 this.props.value 读取，而要定义一个 onChange 事件的回调函数，通过 event.target.value 读取用户输入的值。textarea 元素、select元素、radio元素都属于这种情况

## refs
文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。

```
var formData = {
  input: this.refs.goodInput.value,
  select: this.refs.goodSelect.value,
  textareaValue: this.refs.goodTextarea.value,
  radio: this.state.radioValue,
  check: this.state.checkValues,
};
……

<input ref="goodInput" type="text" defaultValut={this.state.inputValue}/>
```

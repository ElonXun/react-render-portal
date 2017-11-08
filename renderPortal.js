import React,{Component} from 'react';
import ReactDom from 'react-dom';


//老版本
export class RenderPortalV1 extends Component{
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  constructor(props){
    super(props);
  }
  componentDidMount(){
    //新建一个div标签并塞进body
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    this._renderLayer();
  }
  componentDidUpdate(){
    this._renderLayer();
  }
  componentWillUnmount(){//在组件卸载的时候，保证弹层也被卸载掉
    ReactDom.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }
  _renderLayer(){//将弹层渲染到body下的div标签
    ReactDom.render(this.props.children, this.popup);
  }
  render(){
    return null;
  }
}

//16.0 新版本版本
export class RenderPortalV2 extends Component{
  static propTypes = {
    children: PropTypes.node.isRequired,
  }
  constructor(props){
    super(props);
    this.popup = document.createElement('div');
  }
  componentDidMount(){
    //新建一个div标签并塞进body
    document.body.appendChild(this.popup);
  }
  componentDidUpdate(){
  }
  componentWillUnmount(){//在组件卸载的时候，保证弹层也被卸载掉
    document.body.removeChild(this.popup);
  }
  render(){
    return ReactDom.createPortal(
        this.props.children,
        this.popup
    );
  }
}

//RenderPortalV3 参考 antd 版本
export class RenderPortalV3 extends React.Component {
  static propTypes = {
    container: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  }

  componentDidMount() {
    this.createContainer();
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer() {
    this._container = this.props.container();
    this.forceUpdate();
  }

  removeContainer() {
    if (this._container) {
      this._container.parentNode.removeChild(this._container);
    }
  }

  render() {
    if (this._container) {
      return ReactDom.createPortal(this.props.children, this._container);
    }
    return null;
  }
}




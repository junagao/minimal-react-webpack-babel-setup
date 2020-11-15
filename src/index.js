import {render} from 'react-dom'

const App = () => <div>hello world</div>

render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}

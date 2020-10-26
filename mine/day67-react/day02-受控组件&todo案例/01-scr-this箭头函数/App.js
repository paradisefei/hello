/* 
    这个是所有React渲染的根目录，所有通过react生成的元素都被渲染进这里
    然后这个组件再被渲染到到页面的root中去
*/
import Header1 from './Header1';
import Header3 from './Header3';

export default function App() {
	return (
		<div id="App">
			{/* <Header1 /> */}
			<Header3 />
		</div>
	);
}

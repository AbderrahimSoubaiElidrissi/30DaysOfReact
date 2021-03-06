/** 
 * modify the bellow code in order to make it work
 * use stateless/function components
*/

const items = [
    {title: 'item 1', url: 'https://google.com/'},
    {title: 'item 2', url: 'https://google.com/'},
    {title: 'item 3', url: 'https://google.com/'},
    {title: 'item 4', url: 'https://google.com/'},
    {title: 'item 5', url: 'https://google.com/'},
];

const itemsElements = items.map(item =>
    <li>
        {item.title} <a href={item.url}>visit</a>
    </li>
);

const headerProps = {
    className: 'hidden',
    children: [
        <h1>Title goes here</h1>,
        <p>Description goes here</p>
    ],
}

const element = (
    <header className='container' {...headerProps}>
    <ul>
        {itemsElements}
    </ul>
);

ReactDOM.render(element, document.getElementById('root'));